const HANDLERS = {
  call(state, event) {
    if (state.status !== 'idle') return state; // ignored
    if (event.floor === state.floor) return { ...state, status: 'doors-open' };
    return { ...state, status: 'moving', target: event.floor };
  },

  tick(state) {
    if (state.status !== 'moving') return state;
    const floor = state.floor + Math.sign(state.target - state.floor);
    if (floor === state.target) return { floor, status: 'doors-open', target: null };
    return { ...state, floor };
  },

  close(state) {
    return state.status === 'doors-open' ? { ...state, status: 'idle' } : state;
  },
};

export function elevator(state, event) {
  if (!Object.hasOwn(HANDLERS, event.type)) throw new Error(`Unknown event: ${event.type}`);
  return HANDLERS[event.type](state, event);
}

// Safety by design: 'moving' is only entered from 'idle' (doors already closed),
// and the doors only open when 'moving' ends. There is no path to "moving + open".

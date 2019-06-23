const lightLayout = 'light';

function getMode({ mode }) {
  return mode && mode === lightLayout ? lightLayout : 'default'
}

export default {
  layout: ({ query }) => getMode(query),
}

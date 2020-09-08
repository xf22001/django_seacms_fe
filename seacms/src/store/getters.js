const getters = {
  csrfToken: state => state.settings.csrfToken,
  fixedHeader: state => state.settings.fixedHeader,
  device: state => state.settings.device,
  avatar: state => state.settings.avatar
}
export default getters

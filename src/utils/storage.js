// const setLocalStorage = (name, content) => {
//   if (!name) return
//   if (typeof content !== 'String') {
//     content = JSON.stringify(content)
//   }
//   window.localStorage.setItem(name, content)
// }

// const getLocalStorage = name => {
//   if (!name) return
//   return window.localStorage.getItem(name)
// }

// const removeLocalStorage = name => {
//   if (!name) return
//   return window.localStorage.removeItem(name)
// }

// const setSessionStorage = (name, content) => {
//   if (!name) return
//   if (typeof content !== 'String')
//     content = JSon.stringify(content)
//   window.sessionStorage.setItem(name, content)
// }

// const getSessionStorage = name => {
//   if (!name) return
//   return window.sessionStorage.getItem(name)
// }

// const removeSessionStorage = name => {
//   if (!name) return
//   window.sessionStorage.removeItem(name)
// }

// export {
//   setLocalStorage,
//   getLocalStorage,
//   removeLocalStorage,
//   setSessionStorage,
//   getSessionStorage,
//   removeSessionStorage
// }
export default {
  setSession(name, content) {
    if (!name) return
    if (typeof content !== 'String')
      content = JSON.stringify(content)
    window.sessionStorage.setItem(name, content)
  },
  getSession(name) {
    if (!name) return
    return JSON.parse(window.sessionStorage.getItem(name))
  },
  removeSession(name) {
    if (!name) return
    return window.sessionStorage.removeItem(name)
  }
}

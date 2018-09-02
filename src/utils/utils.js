/**
 * 展示loading
 * @param title
 */
export function showLoading(title = '请稍等') {
  wx.showLoading({
    title
  })
}

/**
 * 关闭loading
 */
export function hideLoading() {
  wx.hideLoading()
}

/**
 * 显示toast
 * @param title
 * @param icon
 * @param image
 * @param duration
 */
export function toast(title, icon, image, duration = 3000) {
  wx.showToast({
    title,
    icon,
    image,
    duration
  })
}

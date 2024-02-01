export function DateProvider() {
    const today = new Date(Date.now())
    const dd = today.getDate()
    const date = dd < 10 ? `0${dd}` : dd
    const mm = today.getMonth() + 1
    const month = mm < 10 ? `0${mm}` : mm
    const year = today.getFullYear()

    return year + "-" + month + "-" + date
}
export const goToLogin = (history) => {
    history.push("/login")
}
export const goToSignUp = (history) => {
    history.push("/cadastro")
}
export const goToMusicList = (history) => {
    history.push("/")
}
export const goToAddMusic = (history) => {
    history.push("/adicionar-musica")
}
export const goToDetails = (history, id) => {
    history.push(`/detalhe/${id}`)
}
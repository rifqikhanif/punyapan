let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *XL:* [6285349947480]
┣➥ *Dana:* 6285349947480
┣➥ *Gopay:* 6285349947480
┣➥ *Ovo:* 6285349947480
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285349947480*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

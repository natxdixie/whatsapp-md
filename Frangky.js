require('./config')
// Baileys Multi Device
const { 
 default: makeWASocket, 
 BufferJSON, 
 WA_DEFAULT_EPHEMERAL, 
 generateWAMessageFromContent, 
 downloadContentFromMessage, 
 downloadHistory, 
 proto, 
 getMessage, 
 generateWAMessageContent, 
 prepareWAMessageMedia 
} = require('@adiwajshing/baileys-md')
const { 
 smsg, 
 getGroupAdmins, 
 formatp, 
 tanggal, formatDate, 
 getTime, 
 isUrl, 
 sleep, 
 clockString, 
 runtime, 
 fetchJson, 
 getBuffer, 
 jsonformat, 
 delay, 
 format, 
 logic, 
 generateProfilePicture, 
 parseMention, 
 getRandom 
 } = require('./lib/myfunc')
// Dl YouTube
const { 
 ytMp4 , 
 ytMp3 
} = require('./lib/ytdl')
const { 
 exec, 
 spawn, 
 execSync 
} = require("child_process")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const yts = require('yt-search')
const speed = require('performance-now')
const { igDL } = require('./lib/igdl')
const { Tiktokdl } = require('./lib/tiktokdl')
const { performance } = require('perf_hooks')

module.exports = frnky = async (frnky, m, chatUpdate) => {
    try {
        if (m.key.fromMe) return
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const type = Object.keys(m.message)[0]
        const cmod = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isCreator = [frnky.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == frnky.user.id ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	const isMedia = /image|video|sticker|audio/.test(mime)
	idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = m.isGroup ? idttt.includes(m.chat) : false
	        isPlayer1 = m.isGroup ? players1.includes(m.sender) : false
            isPlayer2 = m.isGroup ? players2.includes(m.sender) : false
        // Group
        const groupMetadata = m.isGroup ? await frnky.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        // Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })


        // Push Message To Console
        if (m.message) {
            console.log(`[ PESAN ] From: ${m.chat} Nama: ${pushname} Pesan: ${budy} `)
        }

        switch(command) {
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    frnky.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    frnky.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    frnky.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    frnky.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    frnky.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    frnky.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    frnky.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await frnky.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await frnky.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	 case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await frnky.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await frnky.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await frnky.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await frnky.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await frnky.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await frnky.updateProfilePicture(frnky.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value open/close'
                if (args[0].toLowerCase() === 'close') {
                    await frnky.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open') {
                    await frnky.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await frnky.groupInviteCode(m.chat)
                frnky.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await frnky.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await frnky.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                frnky.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await frnky.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await frnky.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                        throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break

            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await frnky.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    frnky.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await frnky.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await frnky.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await frnky.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await frnky.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
                let media = await frnky.downloadAndSaveMediaMessage(quoted)
                anu = await UploadFile(media)
                m.reply(anu)
            }
            break
            
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}`
              m.reply(respon)
            }
            break
           case 'ytmp3': {
          if (!text) throw 'Masukkan Link Youtube!'
          m.reply(mess.wait)
          anu = await ytMp3(text)
          frnky.sendMessage(m.chat, { audio: getBuffer(anu.result)}, { quoted: m })
          }
          break
          case 'ytmp4': {
          if (!text) throw 'Masukkan Link Youtube!'
          m.reply(mess.wait)
          anu = await ytMp3(text)
          frnky.sendMessage(m.chat, { video: await getBuffer(anu.result), caption:'Nih'}, { quoted: m })
          }
          break
          case 'tiktok': case 'tiktokdl': case 'tt': {
          if (!text) throw 'Masukkan Link Tiktok!'
          m.reply(mess.wait)
          anu = await Tiktokdl(text)
          frnky.sendMessage(m.chat, { video: await getBuffer(anu.nowatermark) , caption: 'Nih'}, { quoted: m })
          }
          break
          case 'instagram': case 'igdl': case 'ig': {
          if (!text) throw 'Masukkan Link Instagram!'
          m.reply(mess.wait)
          anu = await igDL(text)
          frnky.sendMessage(m.chat, { video: await getBuffer(anu.result.link) , caption: 'Nih'}, { quoted: m })
          }
          break
        case 'play': case 'ytdl': {
if(!text) throw 'Masukkan Link/Judul Youtube!'
m.reply(mess.wait)
pl = await yts(text)
result = pl.all[0]
play_msg = `*Playing Music From Youtube*
     
*Title*: ${result.title}
*Video ID*: ${result.videoId}
*Durasi*: ${result.timestamp}
*Di Buat*: ${result.ago}
*Description*: ${result.description}`
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: play_msg,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: 'MP3',
                                    id: `${prefix}ytmp3 ${result.url}`
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'MP4',
                                    id: `${prefix}ytmp4 ${result.url}`
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                frnky.relayMessage(m.chat, template.message, { messageId: template.key.id })
             }
             break
       // Menu
           case 'menu': case 'help': {
                Textmenu = `Halo *${pushname}* 👋
                
*Tanggal:* -
*Waktu:* -
 
*Download Menu*
*${prefix}tiktok* <link tiktok>
*${prefix}igdl* <link instagram>
*${prefix}ytdl* <link Youtube/Judul>
*${prefix}play* <judul>
*${prefix}ytmp3* <link youtube>
*${prefix}ytmp4* <link youtube>

*Group Menu*
*${prefix}group* <open/close>
*${prefix}ephemeral* <enable/disable>
*${prefix}chat* <option>
*${prefix}linkgc*
*${prefix}setname*
*${prefix}promote* <@628xx/@tag>
*${prefix}demote* <@628x/@tag>

*Game Menu*
*${prefix}tictactoe* <@tag>
*${prefix}deltt*

*Tools Menu*
*${prefix}delete* <reply pesan>

*Owner Menu*
*=>*
*>*
*$*
*${prefix}eval*
 `
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: Textmenu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://www.frangky.me/'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Nomor Owner',
                                    url: 'https://wa.me/6283183586629?text=hai'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                frnky.relayMessage(m.chat, template.message, { messageId: template.key.id } , { quoted: m })
            }
            break
case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
case 'public': {
                if (!isCreator) throw mess.owner
                frnky.public = true
                m.reply('Sukses Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                frnky.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
case 'deltt':
if (!m.isGroup) throw mess.group
if (!isTTT) throw 'Tidak Ada Permainan Di Grub Ini'
naa = ky_ttt.filter(toek => !toek.id.includes(m.chat)) 
ky_ttt = naa
m.reply('Sukses Mereset Game')
break
case 'tictactoe':
case 'ttt':
if (!m.isGroup) throw mess.group
if (args.length < 1) throw 'Tag Lawan Anda! '
if (isTTT) throw 'Sedang Ada Permainan Di Grub Ini, Harap Tunggu'
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Tag target Lawan!')
ment = m.message.extendedTextMessage.contextInfo.mentionedJid
player1 = m.sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = m.chat
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
ttt_pesn = `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /deltt , Untuk Mereset Permainan!`

frnky.sendMessage(m.chat, { text : ttt_pesn , quoted : m , contextInfo: {mentionedJid: [player2] }})
break
// Contact
case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Frangky.;;;'
                    + 'FN:Frangky.\n' // full name
                    + 'ORG:Frangky;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283183586629:+62 831-8358-6629\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                frnky.sendMessage(m.chat, { contacts: { displayName: 'Frangky.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            default:
          // Tictactoe game  
         if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(m.chat))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  frnky.sendMessage(m.chat, { text : ucapan , quoted: m, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(m.chat))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(m.chat)) 
ky_ttt = naa
frnky.sendMessage(m.chat, { text : `Yahh @${tty.player2.split('@')[0]} Menolak:(`, quoted:m ,contextInfo: {mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return m.reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(m.chat)) 
if (!tttawal.includes(main[0].angka[nuber])) return m.reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(m.sender)) return m.reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(m.chat))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(m.chat))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
frnky.sendMessage(m.chat, { text : ucapan1 , quoted:m, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(m.chat))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
m.reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(m.chat))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
 frnky.sendMessage(m.chat, { text : ucapan , quoted: m, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return m.reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(m.chat)) 
if (!tttawal.includes(main[0].angka[nuber])) return m.reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(m.sender)) return m.reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(m.chat))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(m.chat))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
frnky.sendMessage(m.chat, { text : ucapan1 , quoted:m, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(m.chat))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
m.reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(m.chat))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 frnky.sendMessage(m.chat, { text : ucapan , quoted: m, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
	}
            
           
                if (budy.startsWith('=>')){
                if (!isCreator) return
                var konsol = budy.slice(2)
                Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined){
                bang = util.format(sul)
                }
                return m.reply(bang)
                }
                try {
                m.reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                } catch(e){
                 m.reply(String(e))
                }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

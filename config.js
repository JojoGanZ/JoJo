/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7765C0C5354A',
}

// Other
global.owner = ['6285924761802','6285924761802','6287890620694']
global.premium = ['62859224761802']
global.packname = 'TomoriBot-Mdà½¼'
global.author = 'ZyyXd'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','ð¦','ð¤','ð¿']
global.sp = 'â­'
global.mess = {
    success: 'â Ini Kak',
    admin: 'Fitur Khusus Admin Group Kak',
    botAdmin: 'Tomori Harus Menjadi Admin Terlebih Dahulu Kak',
    owner: 'Fitur Khusus Owner Tomori',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Tomori',
    wait: 'Permintaan Anda Sedang Tomori Proses...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/pajar.jpg')
global.pajar = fs.readFileSync('./lib/jar.jpg')

global.menu = fs.readFileSync('./src/menu.jpg')
global.bc = fs.readFileSync('./src/bc.jpg')
global.sewa = fs.readFileSync('./src/sewa.jpg')
global.fake = fs.readFileSync('./src/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

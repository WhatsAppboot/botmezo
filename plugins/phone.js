/* # Exclusively from raashii
 */

const Rashi = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../zara');

if (Config.WORKTYPE == 'private') {

Rashi.addCommand({pattern: 'number', fromMe: true, desc: 'Its send owner number'}, (async (message, match) => {

            const Raashii = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.Z_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Zara fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.Z_NUMBER + ':' + Config.Z_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: Raashii}, MessageType.contact);

  }));
}

else if (Config.WORKTYPE == 'public') {

Rashi.addCommand({pattern: 'number', fromMe: false, desc: 'Its send owner number'}, (async (message, match) => {

            const Raashii = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.Z_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Zara fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.Z_NUMBER + ':' + Config.Z_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: Raashii}, MessageType.contact);

  }));
}

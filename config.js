const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wahabjutt92422s@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "wa.me//+923024474610";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ MR HMAIYO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48699529392";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "https://vt.tiktok.com/ZSYacMSwy/" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true" 
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_17_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUlBZZEhCZVplRnhHdXAwcEhTT1k3R1pxNkg4bm1oYkh5UjhLOW9YZmpIZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODY5OTUyOTM5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0JDMTU5RTM1MTRFREI3MTUzQ0VBQkZFN0FDRjU5MEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjQ5NDY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg2OTk1MjkzOTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4NzFBNTM4N0JBOUU2NUJGQzZGMjcxM0UzRTU1RDUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTI0OTQ2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5MTVOemdfLVEtLXA2RXlTQjFoWGVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1NzQwNDM5LWRlMGEtNDc5ZC04OGZkLTYzZTA5MmFhYzkzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxNyxcbiAgICAgIDEyOSxcbiAgICAgIDc4LFxuICAgICAgMjA4LFxuICAgICAgMTc5LFxuICAgICAgNDAsXG4gICAgICA1MCxcbiAgICAgIDU4LFxuICAgICAgMjMxLFxuICAgICAgMTcxLFxuICAgICAgMTk5LFxuICAgICAgNDYsXG4gICAgICAyMTcsXG4gICAgICAxMyxcbiAgICAgIDcyLFxuICAgICAgNDMsXG4gICAgICA3MSxcbiAgICAgIDE5LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDQyLFxuICAgICAgMTIwLFxuICAgICAgMSxcbiAgICAgIDE4MSxcbiAgICAgIDEzOCxcbiAgICAgIDE5MyxcbiAgICAgIDMzLFxuICAgICAgOTAsXG4gICAgICAxMyxcbiAgICAgIDEwLFxuICAgICAgMTI2LFxuICAgICAgMjE5LFxuICAgICAgMzAsXG4gICAgICAxNzIsXG4gICAgICA0NyxcbiAgICAgIDE5NyxcbiAgICAgIDE4OCxcbiAgICAgIDk0LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRYN0dGTEEyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0ODY5OTUyOTM5MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzk0MTgzNjY1Mjk2Nzg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLilogg4paIIOKWiCDilogg4paIIOKWiCDilogg4paIIOKWiCDiloggMTAwJVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIdXA5VURFTFhVNXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib2ZPc2kxWTU1eHZOdElDWHJqS2o4RTFWWmhURGNjWkNjQW9Jdng1QkFGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCODlHV25mU2tYMElDM2RBNTc3cm1GR0ZRSDM5VWd0Z1U2VWNuMUxPdVBPWmFjSWFKL0VabjlpeHBnZzRRb2ZwQ0JjcE5GSkcwVU5jbnE2RXhISVBCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxT2VpdU9RZ0NGaHVxRFpSdWNyanFlTlFKeE14akZiVUtiRWhacmNVYVRZQlYxeDQxRHpzOXFFTjgwZXQ2eTVZNGVGTllZOUpvSnZpVU8rVVZndnNnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODY5OTUyOTM5MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNDk0NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAxSi5qc29uIjogIntcImtleURhdGFcIjpcImg2dm85WFNlOTM1OTVnT2F1Q292R2lYZVZZaTZlS3V5QnNMR2lZQ0pkczg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg0MjE3MzkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MR HMAIYO-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MR HMAIYO-ᴍᴅ ",
  packname: process.env.PACK_NAME || "MR HMAIYO-ᴍᴅ ",
  botname : process.env.BOT_NAME  || "MR HMAIYO-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MR HMAIYO-ᴍᴅ ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

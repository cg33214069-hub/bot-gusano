const { Telegraf, Markup } = require('telegraf');
const express = require('express');

// Configuración del servidor web falso para que Render no se queje de los puertos
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡El bot de Gusano Royale está activo y funcionando en la nube! 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`);
});

// Token de tu bot de Telegram
const bot = new Telegraf('9088724999:AAEShSRtbBKJQ1sR4NCnxYDlGPEA5xFcrFI');

// Enlace oficial de tu plataforma (cámbialo si tienes otro dominio)
const URL_PLATAFORMA = 'https://gusanoroyale.com'; 

// Comando /start o saludo inicial con enlace y guía de instalación
bot.start((ctx) => {
  ctx.reply(
    `¡Bienvenido a **Gusano Royale**! 🪱🔥\n\n` +
    `La plataforma oficial de juego y diversión. Entra a nuestra web y comienza a competir:\n\n` +
    `🌐 **Enlace oficial:** {https://gusano-royale.vercel.app/}\n\n` +
    `📱 **¿Cómo instalar la app en tu teléfono desde el navegador?**\n` +
    `No necesitas descargar nada de Play Store. Sigue estos pasos rápidos:\n\n` +
    `1️⃣ Abre el enlace de arriba en el navegador de tu celular (Google Chrome ).\n` +
    `2️⃣ Toca el menú del navegador (los 3 puntitos arriba a la derecha en Chrome,).\n` +
    `3️⃣ Selecciona la opción **"Instalar aplicación"** o **"Añadir a la pantalla de inicio"**.\n` +
    `4️⃣ ¡Listo! Te quedará el ícono directo en tu pantalla como una aplicación más.`,
    Markup.inlineKeyboard([
      [Markup.button.url('🚀 Jugar Ahora en la Web', 'https://gusano-royale.vercel.app/')],
      [Markup.button.callback('📝 ¿Cómo registrarse?', 'registro')],
      [Markup.button.callback('💳 ¿Cómo depositar?', 'depositar')],
      [Markup.button.callback('💸 ¿Cómo retirar?', 'retirar')],
      [Markup.button.callback('🎮 Reglas y Tiempos', 'reglas')],
    ])
  );
});

// Opción: Registro
bot.action('registro', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    `📝 **¿Cómo registrarse en la plataforma?**\n\n` +
    `1. Entra a nuestra web oficial: https://gusano-royale.vercel.app/}\n` +
    `2. Regístrate con tu Nombre Completo, Numero de Telefono, Correo Electronico .\n` +
    `3. ¡Listo! Ya tendrás acceso a tu perfil para ingresar a las salas de juego.`
  );
});

// Opción: Depósitos
bot.action('depositar', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    `💳 **¿Cómo depositar saldo?**\n\n` +
    `Realiza tu pago mediante Pago Móvil a los siguentes datos reflegado en la plataforma y reporta tu pago para acreditar el saldo de forma segura en tu cuenta.`
  );
});

// Opción: Retiros
bot.action('retirar', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    `💸 **¿Cómo retirar tus ganancias?**\n\n` +
    `Al finalizar las partidas con victoria, tus premios se suman a tu balance seguro. Desde tu perfil en la web puedes solicitar los retiros de sus fondos mediante pago movil.`
  );
});

// Opción: Reglas y Tiempos
bot.action('reglas', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    `🎮 **Reglas y Tiempos de la Partida:**\n\n` +
    `⏳ **Fase de Preparación (10s):** Ubícate estratégicamente en el mapa.\n\n` +
    `⚔️ **Fase de Combate (60s):** Sobrevive y acumula botín.\n\n` +
    `🏆 **Victoria:** Si sobrevives, te llevas todo el botín.`
  );
});

// Mensaje por defecto si escriben algo
bot.on('text', (ctx) => {
  ctx.reply(`¡Hola! Usa el comando /start para abrir el menú principal de ayuda y opciones.`);
});

// Iniciar el bot
bot.launch();
console.log('🤖 ¡Bot de Telegram actualizado y funcionando con éxito!');

// Cierre seguro
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
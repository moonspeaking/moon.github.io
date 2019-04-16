using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Telegram.Bot;
using Telegram.Bot.Args;
using Telegram.Bot.Types;
//using Telegram.Bot.Enums;
using Telegram.Bot.Types.ReplyMarkups;
using Telegram.Bot.Types.InlineKeyboardButtons;
using ApiAiSDK;
using ApiAiSDK.Model;


namespace AIMoon
{
    class Program
    {
        static TelegramBotClient Bot;
        static ApiAi apiAi;

        static void Main(string[] args)
        {
            Bot = new TelegramBotClient("622070688:AAEGEX_ToGj7rT7Gz7JKHMEkwy-k4sSAV6A");
            AIConfiguration config = new AIConfiguration("01f160f0d6414723b5bef2f6f0911da8", SupportedLanguage.Russian);
            apiAi = new ApiAi(config);

            Bot.OnMessage += BotOnMessageReceived;
            Bot.OnCallbackQuery += BotOnCallbackQueryReceived;

            var me = Bot.GetMeAsync().Result;

            Console.WriteLine(me.FirstName);

            Bot.StartReceiving();
            Console.ReadLine();
            Bot.StopReceiving();
        }

        private static async void BotOnCallbackQueryReceived(object sender, CallbackQueryEventArgs e)
        {
            string buttonText = e.CallbackQuery.Data;
            string name = $"{e.CallbackQuery.From.FirstName} {e.CallbackQuery.From.LastName}";
            Console.WriteLine($"{name} нажал кнопку {buttonText}");


            await Bot.AnswerCallbackQueryAsync(e.CallbackQuery.Id, $"Вы нажали кнопку {buttonText}");
        }

        private static async void BotOnMessageReceived(object sender, MessageEventArgs e)
        {
            var message = e.Message;

            if (message == null || message.Type != Telegram.Bot.Types.Enums.MessageType.TextMessage)
                return;

            string name = $"{message.From.FirstName} {message.From.LastName}"; //кто пишет

            Console.WriteLine($"{name} отправил сообщение '{message.Text}'"); //имя кто пишет

            switch (message.Text)
            {
                case "/start":
                    string text =
@"Список команд:
/start - запуск бота
/menu - вывод меню
/keyboard - вывод клавиатуры";
                    await Bot.SendTextMessageAsync(message.From.Id, text);
                    break;
                case "/menu":
                    var inlineKeyboard = new InlineKeyboardMarkup(new[]
                    {
                        new[]
                        {
                            InlineKeyboardButton.WithUrl("VK", "www.google.com"),
                            InlineKeyboardButton.WithUrl("VK", "www.google.it")
                        },
                        new[]
                        {
                            InlineKeyboardButton.WithCallbackData("One"),
                            InlineKeyboardButton.WithCallbackData("Two")
                        }
                    });
                    await Bot.SendTextMessageAsync(message.From.Id, "Выбери пункт меню", replyMarkup: inlineKeyboard);
                    break;
                case "/keyboard":
                    var replyKeyboard = new ReplyKeyboardMarkup(new[]
                    {
                        new[]
                        {
                            new KeyboardButton("Привет"),
                            new KeyboardButton("Hello")
                        },
                        new[]
                        {
                            new KeyboardButton("Контакт") { RequestContact = true},
                            new KeyboardButton("Geocode") {RequestLocation = true}
                        }
                    });
                    await Bot.SendTextMessageAsync(message.Chat.Id, "Сообщение", replyMarkup: replyKeyboard);
                    break;
                default:
                    var response = apiAi.TextRequest(message.Text);
                    string answer = response.Result.Fulfillment.Speech;
                    if (answer == "")
                        answer = "Sorry, honey";
                    await Bot.SendTextMessageAsync(message.From.Id, answer);
                    break;

            }
        }
    }

}
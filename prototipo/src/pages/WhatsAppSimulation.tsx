import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MoreVertical, 
  Phone, 
  Video, 
  Smile, 
  Paperclip, 
  Camera, 
  Mic, 
  Send,
  CheckCheck
} from 'lucide-react';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

const WhatsAppSimulation: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const messages = [
    { 
      id: 1, 
      text: "Olá Levi! Sou seu assistente GranaAI. Sempre que gastar algo, é só me mandar uma mensagem ou áudio por aqui! 😉", 
      sender: 'bot', 
      time: '12:00' 
    },
    { 
      id: 2, 
      text: "Comprei um BK no iFood agora, deu 85,90", 
      sender: 'user', 
      time: '14:30' 
    },
    { 
      id: 3, 
      text: "✅ Registrado, Levi! Adicionei **R$ 85,90** na categoria **Alimentação** (iFood - Burger King).", 
      sender: 'bot', 
      time: '14:30' 
    },
    { 
      id: 4, 
      text: "📊 Com esse gasto, você atingiu 85% do seu limite mensal de Alimentação. Recomendo segurar os deliveries nos próximos dias para não estourar o orçamento! 💡", 
      sender: 'bot', 
      time: '14:31' 
    },
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-[#efe7de] dark:bg-[#0b141a] flex flex-col animate-fade-in">
      {/* WhatsApp Header */}
      <header className="bg-[#075e54] dark:bg-[#202c33] text-white p-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-black/10 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center font-bold text-lg border border-white/20">
            G
          </div>
          <div className="ml-1">
            <h3 className="font-bold leading-none">GranaAI 🤖</h3>
            <span className="text-[11px] opacity-80">online</span>
          </div>
        </div>
        <div className="flex items-center gap-5 pr-2">
          <Video size={20} className="opacity-90" />
          <Phone size={20} className="opacity-90" />
          <MoreVertical size={20} className="opacity-90" />
        </div>
      </header>

      {/* Chat Background/Messages */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-3"
        style={{ 
          backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="flex justify-center mb-4">
          <span className="bg-[#d1f4ff] dark:bg-[#182229] text-[#54656f] dark:text-[#8696a0] text-[11px] px-3 py-1 rounded-lg uppercase font-medium shadow-sm">
            Hoje
          </span>
        </div>

        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={clsx(
              "flex flex-col max-w-[85%] md:max-w-[60%] animate-slide-up",
              msg.sender === 'user' ? "ml-auto" : "mr-auto"
            )}
          >
            <div 
              className={clsx(
                "p-2.5 rounded-xl shadow-sm relative text-[14.5px] leading-tight",
                msg.sender === 'user' 
                  ? "bg-[#dcf8c6] dark:bg-[#005c4b] text-[#111b21] dark:text-[#e9edef] rounded-tr-none" 
                  : "bg-white dark:bg-[#202c33] text-[#111b21] dark:text-[#e9edef] rounded-tl-none"
              )}
            >
              {/* Message Triangle Tail */}
              <div className={clsx(
                "absolute top-0 w-2 h-2",
                msg.sender === 'user' 
                  ? "-right-2 border-l-[10px] border-l-[#dcf8c6] dark:border-l-[#005c4b] border-b-[10px] border-b-transparent" 
                  : "-left-2 border-r-[10px] border-r-white dark:border-r-[#202c33] border-b-[10px] border-b-transparent"
              )}></div>

              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] opacity-60">{msg.time}</span>
                {msg.sender === 'user' && (
                  <CheckCheck size={14} className="text-[#34b7f1]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Input */}
      <footer className="p-2 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-2">
        <div className="flex items-center gap-3 px-2 text-[#54656f] dark:text-[#8696a0]">
          <Smile size={24} />
          <Paperclip size={24} className="-rotate-45" />
        </div>
        <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-xl flex items-center px-4 py-2 shadow-sm">
          <input 
            type="text" 
            placeholder="Mensagem"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#111b21] dark:text-[#e9edef] text-[15px]"
          />
          <Camera size={24} className="text-[#54656f] dark:text-[#8696a0] ml-2" />
        </div>
        <button className="w-12 h-12 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          {inputValue.trim() ? <Send size={20} /> : <Mic size={24} />}
        </button>
      </footer>
    </div>
  );
};

export default WhatsAppSimulation;

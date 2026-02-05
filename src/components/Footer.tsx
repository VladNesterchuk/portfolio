import { FaTelegram, FaGithub } from "react-icons/fa";
import { MdOutlineMail , MdPhone  } from "react-icons/md";
import { FooterMotion } from "./FooterMotion";

export default function Footer() {
    return(
        <FooterMotion className='flex flex-col items-center gap-5 mt-3
                    bg-cyber-bg/95 backdrop-blur border-t border-cyber-border shadow-[0_0_15px_rgba(34,211,238,0.08)]'>

                <h2 className='text-2xl font-semibold text-neon-fuchsia mt-5'>
                        Contact Me
                </h2>
            <div className='relative flex flex-col items-center gap-5 mt-2'>
                
                <p className="absolute -top-6 right-1 text-xs text-cyber-muted opacity-60 pointer-events-none">
                            Hover to reveal
                </p>

                <a
                    href="mailto:vlad.nesterchuk0906@gmail.com"
                    className="group w-[250px] flex flex-col items-center  gap-1 px-3 py-2 rounded-lg 
                            bg-cyber-card border border-cyber-border shadow-glow-white
                            text-slate-300 font-medium 
                            hover:shadow-glow-cyan hover:border-neon-cyan
                            focus:shadow-glow-cyan focus:border-neon-cyan
                            transition-all duration-300">
                    <p  className="text-sm flex flex-row items-center gap-1 text-center justify-center" >
                        
                        <MdOutlineMail /> Email
                        
                    </p>

                    <p
                        className="
                            text-center
                            text-sm text-neon-cyan
                            max-h-0 overflow-hidden opacity-0 scale-95
                            group-hover:max-h-10 group-hover:opacity-100 group-hover:scale-105
                            group-focus:max-h-10 group-focus:opacity-100 group-focus:scale-105
                            transition-all duration-500">
                        vlad.nesterchuk0906@gmail.com
                    </p>
                    
                </a>

                <a
                    href="tel:380980460528"
                    className="w-[250px] group flex flex-col items-center gap-1 px-3 py-2 rounded-lg 
                            bg-cyber-card border border-cyber-border shadow-glow-white
                            text-slate-300 font-medium 
                            hover:shadow-glow-cyan hover:border-neon-cyan
                            focus:shadow-glow-cyan focus:border-neon-cyan
                            transition-all duration-300">
                    <p  className="text-sm flex flex-row items-center gap-1 text-center justify-center" >
                        
                        <MdPhone/> Phone
                        
                    </p>

                    <p
                        className="text-center text-sm text-neon-cyan
                            max-h-0 overflow-hidden opacity-0 scale-95
                            group-hover:max-h-10 group-hover:opacity-100 group-hover:scale-105
                            group-focus:max-h-10 group-focus:opacity-100 group-focus:scale-105
                            transition-all duration-500">

                        +380 (98) 046-05-28
                    </p>
                </a>

            </div>
                <div className='flex flex-row gap-5'>
                    <a
                        href="https://t.me/h3lpm3pl555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-cyan hover:text-neon-teal font-medium
                                    hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.35)]
                                    hover:scale-110
                                    focus:drop-shadow-[0_0_20px_rgba(45,212,191,0.35)]
                                    focus:scale-110
                                    transition-all duration-500 "
                    >
                        <FaTelegram size={35}/>
                    </a>

                    <a
                        href="https://github.com/VladNesterchuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-cyan hover:text-neon-teal font-medium
                                    hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.35)]
                                    hover:scale-110
                                    focus:drop-shadow-[0_0_20px_rgba(45,212,191,0.35)]
                                    focus:scale-110
                                    transition-all duration-500 "
                    >
                        <FaGithub size={35}/>
                    </a>
                </div>

                <p className="p-3 text-cyber-muted"> © 2025 Vlad Nesterchuk </p>
        </FooterMotion>
    )
}
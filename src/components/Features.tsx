import type { FC, ReactNode } from "react";
import vec1 from "../assets/Vector-1.png";
import vecIcon from "../assets/Decor-icon.png";
import vec2 from "../assets/Vector-2.png";
import vecIcon3 from "../assets/Decor-icon-3.png";
import vec4 from "../assets/Vector-4.png";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const GradientRectangleBorderBox = () => {
  return (
    <div className="bg-black w-full h-fit flex flex-col items-center justify-center">
      <div className="relative w-full h-fit overflow-hidden">
        {/* Left border with gradient */}
        <div className="absolute left-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black via-purple-900 to-purple-500"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black via-purple-900 to-purple-500"></div>

        {/* Bottom border */}
        <div className="absolute top-0 left-0 w-full h-[0.5px] bg-purple-500"></div>

        {/* bottom mask to ensure border starts as black */}
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div>

        <div className="z-20 relative flex flex-col justify-center items-start p-10 space-y-10">
          <img src={vec1} className="w-10" />
          <div className="font-luckiest text-[36px] text-purple-400">
            {"AI is not a Skin => It's Skeleton"}
          </div>
          <div className="font-ubuntu text-white/50">
            ZOAN is an intelligent conversational agent that transforms user
            prompts into fully functional applications. This AI-driven assistant
            leverages architecture that combines large language models (LLMs),
            graph-based memory, and dynamic orchestration to deliver accurate,
            context-aware, and scalable solutions. We’re here to re-architect.{" "}
          </div>
          <button className="group relative bg-purple-300 font-luckiest text-2xl hover:bg-indigo-200 text-black px-8 pt-3 pb-1 w-full rounded-lg font-bold hover:bg-purple-400 hover:-translate-y-1 transition duration-300">
            <span
              style={{
                width: "10px",
                height: "6px",
                borderRadius: "50%",
              }}
              className="absolute top-2 left-1 -rotate-45 bg-white rounded-full transition group-hover:-translate-x-[1px]"
            />
            How
          </button>
        </div>
      </div>
    </div>
  );
};

type TGradientSquareBorderBoxProps = {
  title: string;
  description: string;
  redirect?: string;
  icon?: ReactNode;
};

export const GradientSquareBorderBox: FC<TGradientSquareBorderBoxProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-black w-full h-[300px] flex flex-col items-center justify-center group hover:bg-purple-400 relative z-20 transition durantion-300">
      <div className="relative w-full h-[300px] overflow-hidden">
        {/* Left border with gradient */}
        <div className="group-hover:hidden absolute left-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black via-purple-900 to-purple-500"></div>

        {/* Right border with gradient */}
        <div className="group-hover:hidden absolute right-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black via-purple-900 to-purple-500"></div>

        {/* Bottom border */}
        <div className="group-hover:hidden absolute top-0 left-0 w-full h-[0.5px] bg-purple-500"></div>

        {/* bottom mask to ensure border starts as black */}
        <div className="group-hover:hidden absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div>

        <div className="z-20 relative flex flex-col justify-center items-start p-10 space-y-6">
          <div className="flex flex-row items-center justify-between w-full">
            {icon}
            <ArrowUpRightIcon
              className="text-purple-400 group-hover:bg-white group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={24}
            />
          </div>
          <div className="font-ubuntu text-[17px] font-bold text-purple-400 group-hover:text-purple-500">
            {title}
          </div>
          <div className="font-ubuntu text-white/50 text-sm font-extralight group-hover:text-black"
            style={{
              fontWeight: '200'
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="relative md:w-[800px] h-full border-[0.5px] border-purple-500 bg-[url('/seamless-pattern.png')] bg-[length:300px_300px] bg-repeat">
      <div className="absolute inset-0 bg-black/70" />
      <div className="flex flex-col items-center justify-center space-y-3 md:m-20 mx-4 my-10">
        <div className="mb-3">
          <GradientRectangleBorderBox />
        </div>
        <div className="w-full flex md:flex-row flex-col  md:space-x-3">
          <GradientSquareBorderBox
            title="Decentralize Application Generation Pipeline"
            description="Automates the development process,  allowing for rapid prototyping and deployment."
            redirect=""
            icon={<img src={vecIcon} className="w-10" />}
          />
          <GradientSquareBorderBox
            title="Graph-Based Multi-Agent Orchestration"
            description="Integrates multi-agent workflows through graph-based architectures."
            redirect=""
            icon={<img src={vec2} className="w-10" />}
          />
        </div>
        <div className="w-full flex md:flex-row flex-col md:space-x-3">
          <GradientSquareBorderBox
            title="Dynamic Orchestration via MCP Protocol"
            description="Employed to enhance dynamic orchestration by providing a standardized interface."
            redirect=""
            icon={<img src={vecIcon3} className="w-10" />}
          />
          <GradientSquareBorderBox
            title="Reinforcement Learning from Human Feedback (RLHF)"
            description="Incorporate a (RLHF) component to align Zoan AI's outputs with human preferences."
            redirect=""
            icon={<img src={vec4} className="w-10" />}
          />
        </div>
      </div>
    </div>
  );
};

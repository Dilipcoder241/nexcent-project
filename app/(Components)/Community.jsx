'use client'
import React from 'react'
import { useContext } from "react";
import { modeContext } from "../ModeContext/Context";

export default function Community() {
  const {mode , setMode} =  useContext(modeContext);

  return (
    <div className="community px-10 lg:px-36 mt-20" id={mode}>
        <h1 className="font-semibold text-2xl lg:text-4xl text-center">Caring is the new marketing</h1>
        <p className="lg:w-1/2 text-center mx-auto text-[#717171] mt-2">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        <div className="container mt-4 flex gap-5 justify-center flex-wrap">
          {[{ imglink: "https://s3-alpha-sig.figma.com/img/7776/b16f/d94779a6038df61ab3795e3388d1c731?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8Hi2oUxS5ZBLtL5efZK3lnuEmate3juUM7XDXSOdNOZ1buw3iv3DTV8wUxwBE3TE-CzvWzUaAZvRIRlbOri6duKFGfK9WfKD63~hJqi7N3fFj4KK45wf38WzfpEbNDHxQauSxMX4a5~zqv~fq8CWx68DwP31VbzRgTi8tFTIpm4H6xRR7GyqvlDdNn6e5MGZUcBNg-odc9b3jOM1oGYOk82~zFlnc-~yJ0G0R7I79ym1U7gWhdPCSP1SO8rbMWQ4un3C3zUnS6CA9d~FFyI4h9tF-4B~hl7pPPiDhkDDpE0Da-BmRuhT57YNIvWE~tDMohbHRYXx~mSt0ZKLqsGpg__", title: "Creating Streamlined Safeguarding Processes with OneRen" }, { imglink: "https://s3-alpha-sig.figma.com/img/5b68/113a/d80dfca071d88cdc680544ed9cbcf9ed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S5Fl1hwnp6prp60vcEjp3cQv8~r1v6iXSzOWHUPul92h1kvLiZmEd3atUA18cUGFXzwwFHHzHidpAIi9c3VU2oyTWua45Li57NcYRwvbkGNwu~ife~KrCxdvpLh335g~iV4HYw73IuDP148SzaolXep-IYzcTJcs8eHZ7vSaKqrAXdF9T49EGxjb27s7zUTlkePsBx1kaH9fRMYYr5Ro6olO27VstCdMJlcj4k~hDhXxnMZFgN4koPAWLSCxnKr-rcjbvo18-t5Qlh6i37NaAT8lM035A~fuDYre4Htt2oRNKy~sG~EAyHQ6i63nb96PDsrI7~yak92lxZu8E5~Rbw__", title: "What are your safeguarding responsibilities and how can you manage them?" }, { imglink: "https://s3-alpha-sig.figma.com/img/a353/eb29/cb260e5e45b8deb813272ee1a31ac6f1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fqjQxdLhW4jxdWHVN9ZFWrX95QxZBUqL5XEI5xYVvFvXwin~I1ZUTPYC2t7saaQ-XK0DA8jj74BdJjyavkRDAR4k~avw0~87n7rvt05okKlZdlWo~y6JXE~JFs7C04NH~KsfEncXGS3RA9YKryhxnaUrcwUXMMMyz61HIQ7KovAuRhOzaBZphweW84~NG6SHxF~VT2Fyt5YCSO1ib1kPmGvgqaxfNJdT40w4FOYuPMiwfiz2~R5qGdtUK8swdU4FzvkF9W2Q1NLcI55GM-Zlnbs37Wu6wcSHt3cqRptqu-qMHU5z1IRdC54l7BZugnTiewWJQO1z0QpFRvWt-Tpi9Q__", title: "Revamping the Membership Model with Triathlon Australia" }].map((content, index) => (
            <div key={index} className="box w-[368px] h-[368px] relative">
              <img className="h-[286px] w-full object-cover rounded-md" src={content.imglink} alt="" />
              <div className="mini-box w-[80%] bg-[#F5F7FA] rounded-lg absolute top-3/4 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <h3 className="text-sm lg:text-lg text-center mt-3">{content.title}</h3>
                <button className="text-[#4caf4f] w-full py-4">ReadMore  &#8594;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

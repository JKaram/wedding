import { RecordWithTtl } from "dns";
import React from "react";
import Form1 from "./Form";
import Map from "./Map";

const RSVP: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/6">
          <h1 className="font-serif text-7xl mb-4 tracking-[.3em] w-full">
            RS
            <br className="hidden lg:block" />V<span className="text-gem">P</span>
          </h1>
          <div className="">
            <div className="flex flex-col w-full md:flex-row lg:flex-col ">
              <div className="bg-slate-100 py-2 px-3 space-y-3 md:w-2/4 lg:w-full">
                <Info title="Date">
                  <p>July 22, 2022</p>
                </Info>
                <Info title="Time">
                  <p>5pm Reception</p>
                  <p>5:30pm Cocktails</p>
                </Info>
                <Info title="Venue">
                  <span className="underline">Auqatopia</span>
                </Info>
              </div>
              <Map />
            </div>
          </div>
        </div>
        <div className="w-full m-auto px-1 lg:px-6">
          <Form1 />
        </div>
      </div>
    </div>
  );
};

const Info = ({ children, title }: { title: string; children?: React.ReactNode }) => {
  return (
    <div className="">
      <p className="text-gray-500 text-sm p-0">{title}</p>
      <div className="text-sm font-medium">{children}</div>
    </div>
  );
};

export default RSVP;

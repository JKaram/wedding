import React from "react";

export default function Hero() {
  return (
    <div className="border text-emerald-500 flex">
      <div className="">
        <h1>Jamie &amp; Christina</h1>
        <h2>Save the Date</h2>
        <p>
          I&apos;m baby activated charcoal art party brunch kogi. Fam twee keytar tattooed, occupy pitchfork four dollar
          toast fixie pug. Hell of meggings ethical, air plant yuccie keffiyeh gentrify migas woke mumblecore photo
          booth hammock keytar. Shoreditch tote bag man bun vice, next level vexillologist artisan thundercats
          skateboard mumblecore literally mixtape pok pok. Selfies swag bicycle rights, drinking vinegar everyday carry
          tote bag before they sold out synth whatever adaptogen subway tile salvia squid leggings. Vexillologist af
          lyft, austin ugh seitan echo park keffiyeh sartorial raclette street art flexitarian pickled waistcoat.
        </p>
        <button onClick={() => alert("clicked")}>RSVP</button>
      </div>
      {/* <div className="bg-yellow-400 w-2/3"></div> */}
    </div>
  );
}

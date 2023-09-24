import React from "react";
import {Divider} from "@nextui-org/react";

export default function Footers() {
  return (
  	<>
	    <Divider orientation="horizontal" className="mt-20" />
		    <footer className="grid grid-rows-2 place-content-center items-center">
		    	<div className="flex justify-center items-center text-4xl">
		    		<h1 className="text-orange-400 mt-4 font-mono font-[Lalezar]">DSNOUTS</h1>
		    	</div>
		    	<div className="flex justify-center items-center mb-4">
		    		<span className="w-96 text-center">
		    			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati doloremque, ea possimus animi. Odio nesciunt earum, totam nostrum repellendus fugiat provident qui minus pariatur ut tempora officiis aut excepturi unde.
		    			</p>
		    		</span>
		    	</div>	
					<Divider />
					<div>
						<p className="flex justify-center">© 2020 Wishful Thinking Agency LLC. All rights reserved.</p>
				</div>
		  </footer>
    </>
  );
}

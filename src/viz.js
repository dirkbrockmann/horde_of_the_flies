import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import colors from "./colormaps.js"
import syscfg from "./config.js"

const L = param.L;
const X = d3.scaleLinear().domain([0,L]);
const Y = d3.scaleLinear().domain([0,L]);

const paint = colors[syscfg.simulation.colormap];

var W, H, ctx, cfg;
var ctx;

var line = d3.line().x(d=>param.agentsize*d.x).y(d=>param.agentsize*d.y);	

function tadpole () {
	var M = 30;
	var drop = d3.range(M).map(function(d,i){
			return { 
				x: -2 * Math.cos(i/M*Math.PI*2), 
				y: Math.sin(i/M*Math.PI*2) * Math.pow( Math.sin(i/M/2*Math.PI*2) , 6 )
			};
		})
	return line(drop);
}	

console.log(tadpole())

const initialize = (display,config) => {
	
	cfg = config;
	W = cfg.display_size.width;
	H = cfg.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');
		
	// clear canvas
	
	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, cfg.display_size.width, cfg.display_size.height);		

	agents.forEach(a=>{
		//ctx.save()
		 ctx.beginPath();
		 ctx.moveTo(0,0)
		 ctx.lineTo(X(10),Y(0))
 		ctx.rotate(a.theta * Math.PI / 180);
		ctx.translate(X(a.x),Y(a.y))
		//ctx.arc(X(a.x), Y(a.y), param.agentsize, 0, 2 * Math.PI, false);
		
		ctx.stroke();
 		ctx.fillStyle = param.color_by_heading.widget.value() ? paint(a.theta_neighbors/360)  : "black";
 		ctx.fill();
		//ctx.restore();
	})
	
};

const go = (display) => {

	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, cfg.display_size.width, cfg.display_size.height);

	agents.forEach(a=>{

		 ctx.beginPath();
		 ctx.arc(X(a.x), Y(a.y), param.agentsize, 0, 2 * Math.PI, false);
		 ctx.fillStyle = param.color_by_heading.widget.value() ? paint(a.theta_neighbors/360)  : "black";
		 ctx.fill();
		 ctx.closePath();
	})
	
}


export {initialize,go,go as update}

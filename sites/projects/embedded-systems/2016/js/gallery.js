(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 629,
	fps: 60,
	color: "#003333",
	manifest: []
};



// symbols:



(lib._10_weightTrainer = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._11_smartshoe = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._12_linefollower = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._13_isafe = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._14_iotGreenhouse = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._15_smartmark = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1_petfeeder = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2_medicinebox = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3_dreamfield = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._4_piggybank = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._5_virtualLED = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._6_smartnoticeboard = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._7_robotArm = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._8_lightAutomation = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._9_paperburningPrinter = function() {
	this.spriteSheet = ss["gallery_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.textbox_txt = new cjs.Text("Remote\nLine Follower", "24px 'Segoe UI'", "#FFFFFF");
	this.textbox_txt.name = "textbox_txt";
	this.textbox_txt.textAlign = "center";
	this.textbox_txt.lineHeight = 27;
	this.textbox_txt.setTransform(-2,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.textbox_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,-31.4,143.6,62.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnNMgInOsgIHOsfIOaAAIHOMfInOMgg");
	this.shape.setTransform(92.4,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.8,160);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAWIAAgiIgKAAIAAgIIAKAAIAAgPIAIgDIAAASIAPAAIAAAIIgPAAIAAAfQAAAHACACQACADAEAAQAEAAADgCIAAAIQgDACgGAAQgNAAgBgRg");
	this.shape.setTransform(86.2,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAWQgIgIAAgNQAAgNAIgJQAJgJAMAAQAIAAAGADIAAAKQgHgFgHAAQgIAAgFAHQgGAGAAAJQAAAKAFAHQAGAGAHAAQAIAAAHgGIAAAKQgHAEgJAAQgLAAgIgJg");
	this.shape_1.setTransform(81.5,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAXQgHgJgBgOQAAgMAIgJQAJgJAJAAQAMAAAGAIQAGAHABAOIAAADIgpAAQABAKAFAFQAFAGAHAAQAKAAAIgHIAAAJQgHAGgOAAQgKAAgHgIgAgIgRQgFAFgCAIIAfAAQAAgJgEgEQgEgFgHAAQgFAAgEAFg");
	this.shape_2.setTransform(75.6,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA3IAAgIQAFACADAAQALAAAAgVIAAg5IAKAAIAAA4QAAAOgGAIQgGAIgJAAQgEAAgEgCgAAFguQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(70,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAWQgIgIAAgOQAAgNAJgIQAHgJANAAQANAAAHAIQAIAJAAANQAAANgIAJQgJAJgMAAQgMAAgIgJgAgNgPQgFAGAAAJQAAAKAFAGQAGAHAHAAQAJAAAFgGQAFgGAAgLQAAgKgFgGQgFgGgJAAQgHAAgGAHg");
	this.shape_4.setTransform(66.1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAeIAAg6IAJAAIAAAMIABAAQACgGACgDQAEgEAFAAIAGABIAAAKQgCgCgFAAQgGAAgCAGQgFAFAAAJIAAAeg");
	this.shape_5.setTransform(61.1,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYApIAAhRIAXAAQALAAAIAGQAHAHAAAMQAAAMgIAFQgJAIgLAAIgLAAIAAAfgAgOABIAKAAQAIAAAGgDQAFgEAAgJQAAgQgSAAIgLAAg");
	this.shape_6.setTransform(55.5,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAdIgMgoIgBgGIAAAAIAAAFIgNApIgJAAIgSg5IAKAAIAMAqIABAGIAAAAIABgGIAOgqIAHAAIAMArIABAFIABAAIABgFIAMgrIAJAAIgSA5g");
	this.shape_7.setTransform(44.3,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAXQgIgJABgOQAAgMAHgJQAIgJAKAAQAMAAAGAIQAHAHgBAOIAAADIgnAAQgBAKAGAFQAFAGAHAAQAKAAAJgHIAAAJQgIAGgNAAQgLAAgHgIgAgJgRQgEAFgBAIIAeAAQAAgJgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_8.setTransform(36.9,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAIAAIAAA6gAgDggQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_9.setTransform(32.3,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEApIgfhRIALAAIAYBAIAAAHIABgHIAYhAIAKAAIgeBRg");
	this.shape_10.setTransform(27.1,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACAoIgSgDQgNgFgKgIIgCgCIgDgBIgFgGIgFgIIgBgEIAAgHIABgCIABgDIABgCIAFgHIAFgEIADgCIABgBIACgBIAFgEIAGgCQAJgFAEAAIAMgCIAIAAIAAABIAFAAIADABIADAAIADABIASAKIAFAGIACAEIADADIAGANIAAAFIgBAEIgBABIAAACIgCACIgGAIIgBABQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAABIgBABIgDACIgDADIgJAFIgKADIgLABIgCABgAgIgVIgNAHIgCABIgEACIgDADIgDAEIgDADIAAABIAAAAIAAAAIAAABIACACIAPANIAJAFIAMACIADAAIABABIASgCIAHgBIAGgDIABAAIABgBIABAAIABgBIACgCIAEgEIABgCIABgBIACgDIAAgBIABAAIgBgBIAAgCIgCgBIAAgBIgBgBIgBgCIgFgGIgJgFIgPgGIgSAAgAgHANQgFgGAAgHQAAgGAFgHQAHgFAFgBQAJABAGAFQAFAHAAAGQAAAHgFAGQgGAGgJABQgFgBgHgGg");
	this.shape_11.setTransform(13.7,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxiAIPjAAIAAEBIvjAAg");
	this.shape_12.setTransform(49.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.004)").s().p("AnxCBIAAkBIPjAAIAAEBg");
	this.shape_13.setTransform(49.9,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,101.7,27.9);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,102,0.6)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape.setTransform(93,80.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(45,136,91,0.624)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_1.setTransform(93,80.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(40,119,79,0.643)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_2.setTransform(93,80.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(34,102,68,0.667)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_3.setTransform(93,80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,85,57,0.69)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_4.setTransform(93,80.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(23,68,45,0.71)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_5.setTransform(93,80.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(17,51,34,0.733)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_6.setTransform(93,80.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(11,34,23,0.757)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_7.setTransform(93,80.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(6,17,11,0.776)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_8.setTransform(93,80.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.8)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_9.setTransform(93,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,161.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape.setTransform(93,80.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(9,26,17,0.765)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_1.setTransform(93,80.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(17,51,34,0.733)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_2.setTransform(93,80.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(26,77,51,0.702)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_3.setTransform(93,80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(34,102,68,0.667)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_4.setTransform(93,80.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(42,127,85,0.635)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_5.setTransform(93,80.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,153,102,0.6)").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_6.setTransform(93,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,161.1);


(lib.project_img_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib._1_petfeeder();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib._2_medicinebox();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib._3_dreamfield();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib._4_piggybank();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib._5_virtualLED();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib._6_smartnoticeboard();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib._7_robotArm();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib._8_lightAutomation();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib._9_paperburningPrinter();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.instance_9 = new lib._10_weightTrainer();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.instance_10 = new lib._11_smartshoe();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.instance_11 = new lib._12_linefollower();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.instance_12 = new lib._13_isafe();
	this.instance_12.setTransform(0,0,0.5,0.5);

	this.instance_13 = new lib._14_iotGreenhouse();
	this.instance_13.setTransform(0,0,0.5,0.5);

	this.instance_14 = new lib._15_smartmark();
	this.instance_14.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,160);


(lib.title_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.text_mc = new lib.Tween2();
	this.text_mc.setTransform(71.8,12.4);
	this.text_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text_mc).to({y:31.4,alpha:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19,143.6,62.8);


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.text_mc = new lib.Tween2();
	this.text_mc.setTransform(71.8,31.4);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).to({y:12.4,alpha:0},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.6,62.8);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.back_image = new lib.project_img_mc();
	this.back_image.setTransform(89.8,81.4,1,1,0,0,0,89.8,81.4);

	this.timeline.addTween(cjs.Tween.get(this.back_image).wait(1).to({regX:90,regY:80,scaleX:1.11,scaleY:1.11,x:90.1,y:79.9},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:79.8},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:79.7},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:79.8},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:79.7},0).wait(2).to({regX:89.8,regY:81.5,scaleX:1.26,scaleY:1.26,x:89.8,y:81.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,160);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer 1
	this.back_image = new lib.project_img_mc();
	this.back_image.setTransform(89.8,81.5,1.262,1.262,0,0,0,89.8,81.5);

	this.timeline.addTween(cjs.Tween.get(this.back_image).wait(1).to({regX:90,regY:80,scaleX:1.15,scaleY:1.15,x:90.1,y:79.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:79.9},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.06,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:90},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:90.1,y:80},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:90,y:79.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:80},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:90.1,y:79.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:90,y:80},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1,x:90.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:90},0).wait(1).to({regX:89.8,regY:81.4,scaleX:1,x:89.8,y:81.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-21.3,227.1,201.9);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(49.9,24.6,1,1,0,0,0,49.9,13);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13,alpha:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,10.6,101.7,27.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(49.9,13,1,1,0,0,0,49.9,13);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24.6,alpha:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,101.7,27.9);


(lib.project_clip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.t1 = new lib.title_mc();
	this.t1.setTransform(94.9,64.4,1,1,0,0,0,71.8,31.4);

	this.t1_i = new lib.title_mccopy();
	this.t1_i.setTransform(94.9,64.4,1,1,0,0,0,71.8,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1}]}).to({state:[{t:this.t1_i}]},1).wait(1));

	// Layer 5
	this.instance = new lib.Symbol3();
	this.instance.setTransform(94,118.8,1,1,0,0,0,49.9,13);

	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(94,118.8,1,1,0,0,0,49.9,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(93,80.5,1,1,0,0,0,93,80.5);

	this.instance_3 = new lib.Symbol1copy();
	this.instance_3.setTransform(93,80.5,1,1,0,0,0,93,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	mask.setTransform(93,80.5);

	// Layer 2
	this.i1 = new lib.Symbol4();
	this.i1.setTransform(133.1,81.1,1.033,1.007,0,0,0,128.8,80.5);

	this.i1_i = new lib.Symbol4copy();
	this.i1_i.setTransform(133.1,81.1,1.033,1.007,0,0,0,128.8,80.5);

	this.i1.mask = this.i1_i.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.i1}]}).to({state:[{t:this.i1_i}]},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape.setTransform(93,80.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AnQMlInRslIHRskIOhAAIHRMkInRMlg");
	this.shape_1.setTransform(93,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,161.1);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(1465.2,71.3,0.891,0.891,180,0,0,92.4,80);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(1465.2,398.5,0.891,0.891,180,0,0,92.4,80);
	this.instance_1.alpha = 0.48;

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(1604.9,153.4,0.859,0.859,180,0,0,92.4,80);
	this.instance_2.alpha = 0.48;

	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(1604.5,312.8,0.859,0.859,180,0,0,92.4,80);
	this.instance_3.alpha = 0.48;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(1735.8,234.6,0.801,0.801,180,0,0,92.4,80);
	this.instance_4.alpha = 0.48;

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(1331.7,473.4,0.891,0.891,0,0,0,92.4,80);
	this.instance_5.alpha = 0.48;

	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(1050.2,473.4,0.891,0.891,0,0,0,92.4,80);
	this.instance_6.alpha = 0.48;

	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(768.6,473.4,0.891,0.891,0,0,0,92.4,80);
	this.instance_7.alpha = 0.48;

	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(487.1,473.4,0.891,0.891,0,0,0,92.4,80);
	this.instance_8.alpha = 0.48;

	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(1188.4,71.3,0.891,0.891,0,0,0,92.4,80);
	this.instance_9.alpha = 0.48;

	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(906.9,71.3,0.891,0.891,0,0,0,92.4,80);
	this.instance_10.alpha = 0.48;

	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(625.3,71.3,0.891,0.891,0,0,0,92.4,80);
	this.instance_11.alpha = 0.48;

	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(344.7,398.5,0.891,0.891,0,0,0,92.4,80);
	this.instance_12.alpha = 0.48;

	this.instance_13 = new lib.Symbol5();
	this.instance_13.setTransform(344.7,239.6,0.891,0.891,0,0,0,92.4,80);
	this.instance_13.alpha = 0.48;

	this.instance_14 = new lib.Symbol5();
	this.instance_14.setTransform(344.7,71.3,0.891,0.891,0,0,0,92.4,80);
	this.instance_14.alpha = 0.48;

	this.instance_15 = new lib.Symbol5();
	this.instance_15.setTransform(205,316.5,0.859,0.859,0,0,0,92.4,80);
	this.instance_15.alpha = 0.48;

	this.instance_16 = new lib.Symbol5();
	this.instance_16.setTransform(205.4,157,0.859,0.859,0,0,0,92.4,80);
	this.instance_16.alpha = 0.48;

	this.instance_17 = new lib.Symbol5();
	this.instance_17.setTransform(74.1,235.2,0.801,0.801,0,0,0,92.4,80);
	this.instance_17.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1809.9,544.7);


(lib.all_projects = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// up transition
		this.project_1.t1.text_mc.textbox_txt.text = "\nPet Feeder";
		this.project_2.t1.text_mc.textbox_txt.text = "Smart\nMedicine Box";
		this.project_3.t1.text_mc.textbox_txt.text = "Dream\nFields";
		this.project_4.t1.text_mc.textbox_txt.text = "Smart\nPiggy Bank";
		this.project_5.t1.text_mc.textbox_txt.text = "Virtual\nLED display";
		this.project_6.t1.text_mc.textbox_txt.text = "Smart\nNoticeBoard";
		this.project_7.t1.text_mc.textbox_txt.text = "Robot Arm\nController";
		this.project_8.t1.text_mc.textbox_txt.text = "Light\nAutomation";
		this.project_9.t1.text_mc.textbox_txt.text = "Paper Burn\nPrinter";
		this.project_10.t1.text_mc.textbox_txt.text = "Wearable\nWeight Trainer";
		this.project_11.t1.text_mc.textbox_txt.text = "\nSmart Shoe";
		this.project_12.t1.text_mc.textbox_txt.text = "Remote\nLine Follower";
		this.project_13.t1.text_mc.textbox_txt.text = "\niSAFE";
		this.project_14.t1.text_mc.textbox_txt.text = "IoT\nGreenhouse";
		this.project_15.t1.text_mc.textbox_txt.text = "\nSmartMARK";
		
		// over transition
		this.project_1.t1_i.text_mc.textbox_txt.text = "\nPet Feeder";
		this.project_2.t1_i.text_mc.textbox_txt.text = "Smart\nMedicine Box";
		this.project_3.t1_i.text_mc.textbox_txt.text = "Dream\nFields";
		this.project_4.t1_i.text_mc.textbox_txt.text = "Smart\nPiggy Bank";
		this.project_5.t1_i.text_mc.textbox_txt.text = "Virtual\nLED display";
		this.project_6.t1_i.text_mc.textbox_txt.text = "Smart\nNoticeBoard";
		this.project_7.t1_i.text_mc.textbox_txt.text = "Robot Arm\nController";
		this.project_8.t1_i.text_mc.textbox_txt.text = "Light\nAutomation";
		this.project_9.t1_i.text_mc.textbox_txt.text = "Paper Burn\nPrinter";
		this.project_10.t1_i.text_mc.textbox_txt.text = "Wearable\nWeight Trainer";
		this.project_11.t1_i.text_mc.textbox_txt.text = "\nSmart Shoe";
		this.project_12.t1_i.text_mc.textbox_txt.text = "Remote\nLine Follower";
		this.project_13.t1_i.text_mc.textbox_txt.text = "\niSAFE";
		this.project_14.t1_i.text_mc.textbox_txt.text = "IoT\nGreenhouse";
		this.project_15.t1_i.text_mc.textbox_txt.text = "\nSmartMARK";
		
		
		// goto image frames over
		this.project_1.i1_i.back_image.gotoAndStop(0);
		this.project_2.i1_i.back_image.gotoAndStop(1);
		this.project_3.i1_i.back_image.gotoAndStop(2);
		this.project_4.i1_i.back_image.gotoAndStop(3);
		this.project_5.i1_i.back_image.gotoAndStop(4);
		this.project_6.i1_i.back_image.gotoAndStop(5);
		this.project_7.i1_i.back_image.gotoAndStop(6);
		this.project_8.i1_i.back_image.gotoAndStop(7);
		this.project_9.i1_i.back_image.gotoAndStop(8);
		this.project_10.i1_i.back_image.gotoAndStop(9);
		this.project_11.i1_i.back_image.gotoAndStop(10);
		this.project_12.i1_i.back_image.gotoAndStop(11);
		this.project_13.i1_i.back_image.gotoAndStop(12);
		this.project_14.i1_i.back_image.gotoAndStop(13);
		this.project_15.i1_i.back_image.gotoAndStop(14);
		
		// goto image frames up
		this.project_1.i1.back_image.gotoAndStop(0);
		this.project_2.i1.back_image.gotoAndStop(1);
		this.project_3.i1.back_image.gotoAndStop(2);
		this.project_4.i1.back_image.gotoAndStop(3);
		this.project_5.i1.back_image.gotoAndStop(4);
		this.project_6.i1.back_image.gotoAndStop(5);
		this.project_7.i1.back_image.gotoAndStop(6);
		this.project_8.i1.back_image.gotoAndStop(7);
		this.project_9.i1.back_image.gotoAndStop(8);
		this.project_10.i1.back_image.gotoAndStop(9);
		this.project_11.i1.back_image.gotoAndStop(10);
		this.project_12.i1.back_image.gotoAndStop(11);
		this.project_13.i1.back_image.gotoAndStop(12);
		this.project_14.i1.back_image.gotoAndStop(13);
		this.project_15.i1.back_image.gotoAndStop(14);
		
		// updatecache
		this.project_1.i1.back_image.cache(0,0,320,360);
		this.project_2.i1.back_image.cache(0,0,320,360);
		this.project_3.i1.back_image.cache(0,0,320,360);
		this.project_4.i1.back_image.cache(0,0,320,360);
		this.project_5.i1.back_image.cache(0,0,320,360);
		this.project_6.i1.back_image.cache(0,0,320,360);
		this.project_7.i1.back_image.cache(0,0,320,360);
		this.project_8.i1.back_image.cache(0,0,320,360);
		this.project_9.i1.back_image.cache(0,0,320,360);
		this.project_10.i1.back_image.cache(0,0,320,360);
		this.project_11.i1.back_image.cache(0,0,320,360);
		this.project_12.i1.back_image.cache(0,0,320,360);
		this.project_13.i1.back_image.cache(0,0,320,360);
		this.project_14.i1.back_image.cache(0,0,320,360);
		this.project_15.i1.back_image.cache(0,0,320,360);
		
		this.project_1.i1_i.back_image.cache(0,0,320,360);
		this.project_2.i1_i.back_image.cache(0,0,320,360);
		this.project_3.i1_i.back_image.cache(0,0,320,360);
		this.project_4.i1_i.back_image.cache(0,0,320,360);
		this.project_5.i1_i.back_image.cache(0,0,320,360);
		this.project_6.i1_i.back_image.cache(0,0,320,360);
		this.project_7.i1_i.back_image.cache(0,0,320,360);
		this.project_8.i1_i.back_image.cache(0,0,320,360);
		this.project_9.i1_i.back_image.cache(0,0,320,360);
		this.project_10.i1_i.back_image.cache(0,0,320,360);
		this.project_11.i1_i.back_image.cache(0,0,320,360);
		this.project_12.i1_i.back_image.cache(0,0,320,360);
		this.project_13.i1_i.back_image.cache(0,0,320,360);
		this.project_14.i1_i.back_image.cache(0,0,320,360);
		this.project_15.i1_i.back_image.cache(0,0,320,360);
		
		
		// actions for scroll to
		this.project_1.addEventListener("click", function(){ gotoLink(1) });
		this.project_2.addEventListener("click", function(){ gotoLink(2) });
		this.project_3.addEventListener("click", function(){ gotoLink(3) });
		this.project_4.addEventListener("click", function(){ gotoLink(4) });
		this.project_5.addEventListener("click", function(){ gotoLink(5) });
		this.project_6.addEventListener("click", function(){ gotoLink(6) });
		this.project_7.addEventListener("click", function(){ gotoLink(7) });
		this.project_8.addEventListener("click", function(){ gotoLink(8) });
		this.project_9.addEventListener("click", function(){ gotoLink(9) });
		this.project_10.addEventListener("click", function(){ gotoLink(10) });
		this.project_11.addEventListener("click", function(){ gotoLink(11) });
		this.project_12.addEventListener("click", function(){ gotoLink(12) });
		this.project_13.addEventListener("click", function(){ gotoLink(13) });
		this.project_14.addEventListener("click", function(){ gotoLink(14) });
		this.project_15.addEventListener("click", function(){ gotoLink(15) });

		var gotoLink = function(num){
		$('html, body').animate({
			scrollTop: $( "#project_" + num ).offset().top - 200
		}, 1000);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol5();
	this.instance.setTransform(487,-299.9,0.891,0.891,180,0,0,92.4,80);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(487,27.3,0.891,0.891,180,0,0,92.4,80);
	this.instance_1.alpha = 0.48;

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(626.8,-217.8,0.859,0.859,180,0,0,92.4,80);
	this.instance_2.alpha = 0.48;

	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(626.3,-58.4,0.859,0.859,180,0,0,92.4,80);
	this.instance_3.alpha = 0.48;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(757.7,-136.6,0.801,0.801,180,0,0,92.4,80);
	this.instance_4.alpha = 0.48;

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(353.6,102.2,0.891,0.891,0,0,0,92.4,80);
	this.instance_5.alpha = 0.48;

	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(72,102.2,0.891,0.891,0,0,0,92.4,80);
	this.instance_6.alpha = 0.48;

	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(-209.5,102.2,0.891,0.891,0,0,0,92.4,80);
	this.instance_7.alpha = 0.48;

	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(-491.1,102.2,0.891,0.891,0,0,0,92.4,80);
	this.instance_8.alpha = 0.48;

	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(210.3,-299.9,0.891,0.891,0,0,0,92.4,80);
	this.instance_9.alpha = 0.48;

	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(-71.3,-299.9,0.891,0.891,0,0,0,92.4,80);
	this.instance_10.alpha = 0.48;

	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(-352.8,-299.9,0.891,0.891,0,0,0,92.4,80);
	this.instance_11.alpha = 0.48;

	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(-633.4,27.3,0.891,0.891,0,0,0,92.4,80);
	this.instance_12.alpha = 0.48;

	this.instance_13 = new lib.Symbol5();
	this.instance_13.setTransform(-633.4,-131.6,0.891,0.891,0,0,0,92.4,80);
	this.instance_13.alpha = 0.48;

	this.instance_14 = new lib.Symbol5();
	this.instance_14.setTransform(-633.4,-299.9,0.891,0.891,0,0,0,92.4,80);
	this.instance_14.alpha = 0.48;

	this.instance_15 = new lib.Symbol5();
	this.instance_15.setTransform(-773.2,-54.7,0.859,0.859,0,0,0,92.4,80);
	this.instance_15.alpha = 0.48;

	this.instance_16 = new lib.Symbol5();
	this.instance_16.setTransform(-772.7,-214.2,0.859,0.859,0,0,0,92.4,80);
	this.instance_16.alpha = 0.48;

	this.instance_17 = new lib.Symbol5();
	this.instance_17.setTransform(-904.1,-136,0.801,0.801,0,0,0,92.4,80);
	this.instance_17.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.project_15 = new lib.project_clip_mc();
	this.project_15.setTransform(348.1,-59.8,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_15, 0, 1, 1);

	this.project_14 = new lib.project_clip_mc();
	this.project_14.setTransform(208.8,19.7,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_14, 0, 1, 1);

	this.project_13 = new lib.project_clip_mc();
	this.project_13.setTransform(69.5,-59.8,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_13, 0, 1, 1);

	this.project_12 = new lib.project_clip_mc();
	this.project_12.setTransform(-69.8,19.7,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_12, 0, 1, 1);

	this.project_11 = new lib.project_clip_mc();
	this.project_11.setTransform(-209,-59.8,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_11, 0, 1, 1);

	this.project_10 = new lib.project_clip_mc();
	this.project_10.setTransform(-348.3,19.7,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_10, 0, 1, 1);

	this.project_9 = new lib.project_clip_mc();
	this.project_9.setTransform(-487.6,-59.8,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_9, 0, 1, 1);

	this.project_8 = new lib.project_clip_mc();
	this.project_8.setTransform(487.7,-140.3,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_8, 0, 1, 1);

	this.project_7 = new lib.project_clip_mc();
	this.project_7.setTransform(348.1,-219.9,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_7, 0, 1, 1);

	this.project_6 = new lib.project_clip_mc();
	this.project_6.setTransform(208.8,-140.3,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_6, 0, 1, 1);

	this.project_5 = new lib.project_clip_mc();
	this.project_5.setTransform(69.5,-219.9,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_5, 0, 1, 1);

	this.project_4 = new lib.project_clip_mc();
	this.project_4.setTransform(-69.8,-140.3,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_4, 0, 1, 1);

	this.project_3 = new lib.project_clip_mc();
	this.project_3.setTransform(-209,-219.9,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_3, 0, 1, 1);

	this.project_2 = new lib.project_clip_mc();
	this.project_2.setTransform(-348.3,-140.3,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_2, 0, 1, 1);

	this.project_1 = new lib.project_clip_mc();
	this.project_1.setTransform(-487.6,-219.9,0.993,0.993,0,0,0,93,80.5);
	new cjs.ButtonHelper(this.project_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.project_1},{t:this.project_2},{t:this.project_3},{t:this.project_4},{t:this.project_5},{t:this.project_6},{t:this.project_7},{t:this.project_8},{t:this.project_9},{t:this.project_10},{t:this.project_11},{t:this.project_12},{t:this.project_13},{t:this.project_14},{t:this.project_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-978.1,-371.2,1809.9,544.7);


// stage content:



(lib.gallery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stage.addEventListener("stagemousemove", function(e){
			
			var all_mc = exportRoot.children[2];
			var bg_mc = exportRoot.children[1];
		
			all_mc_width = all_mc.nominalBounds.width;
			t_x = (all_mc_width)/2 - (e.stageX/canvas.width) * (all_mc_width - canvas.width);
			
			bg_mc_width = bg_mc.nominalBounds.width;
			t_y = (bg_mc_width)/2 - (e.stageX/canvas.width) * (all_mc_width - canvas.width)/2;
			
				var target = all_mc;
				var tween = createjs.Tween.get(target, {
					override: true
				})
					.to({
						x: t_x,
					}, 1000, createjs.Ease.quintOut);
			
				var target = bg_mc;
				var tween = createjs.Tween.get(target, {
					override: true
				})
					.to({
						x: t_y,
					}, 1000, createjs.Ease.quintOut);
		
			
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.all_mc = new lib.all_projects();
	this.all_mc.setTransform(631.9,423.6,1.11,1.11);

	this.bg_mc = new lib.bg_mc();
	this.bg_mc.setTransform(555.6,314.5,1,1,0,0,0,904.9,272.3);
	this.bg_mc.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_mc},{t:this.all_mc}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,51,0)").s().p("Eii4BFpMAAAiLRMFFyAAAMAAACLRg");
	this.shape.setTransform(512.2,314.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,183.3,2085.7,891.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
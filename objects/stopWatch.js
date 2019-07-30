function Stopwatch(){
    let startTime, endTime, running, duration=0,reset;

    this.start = function(){
        if(running)
        throw Error('its already running');

        running = true;
        startTime = new Date();
    }
    this.stop = function(){
        if (!running)
        throw Error('its not running you fool');
        
        endTime= new Date();
        running = false;
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds; 
    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;
    }
}


const sw = new Stopwatch();

sw.start();
sw.stop();
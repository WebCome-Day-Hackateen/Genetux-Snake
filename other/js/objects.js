function abs(x) {
    return x >= 0 ? x : -x;
}
  

class Controller {
    constructor (){
        this.model = tf.sequential();
        this.input = this.model.add(tf.layers.dense({units: 1, inputShape : [4]}));
        this.layer1 = this.model.add(tf.layers.dense({units: 24}));
        this.output = this.model.add(tf.layers.dense({units:2}));
        this.model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});


    }

    think(px, py, ax, ay){
        return(
            this.model.predict(
                tf.tensor2d([
                    px > ax ? 1 : 0,
                    py > ay ? 1 : 0,
                    py < ay ? -1 : 0,
                    px < ax ? -1 : 0,
                ], [1,4])
            )
        )
    }
}

class Snake {
    constructor(){
        this.px = 500;
        this.py = 500;
        this.ax = 20;
        this.ay = 20;
        this.Controller = new Controller()
        this.pxNext = 0;
        this.pyNext = 0;
    }

    changeDirection(px, py){
        this.pxNext = px;
        this.pyNext = py;
    }

    changePrediction() {
        this.prediction = this.Controller.think(this.px, this.py, this.ax, this.ay);
        var choice = this.prediction.dataSync();
        var newX = abs(choice[0]) > abs(choice[1]) ? choice[0] : 0;
        var newY = abs(choice[1]) > abs(choice[0]) ? choice[1] : 0;
        this.brain.model.fit(tf.tensor2d(this.brain.fitness, [1, 4]), tf.tensor2d(this.evaluate(), [1, 2]))
        this.brain.model.evaluate(tf.tensor2d(this.brain.fitness, [1, 4]), tf.tensor2d(this.evaluate(), [1, 2]))
        this.changeDirection(newx, newy);
    }

    evaluate() {
        var x = this.ax == this.px ? 0 : (this.ax > this.px ? 1 : -1);
        var y = this.ay == this.py ? 0 : (this.ay > this.py ? 1 : -1);
        return Array(x, y)
    }
}

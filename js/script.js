/**
 * Created by Илья Яновой on 02.05.2016.
 */
function Human(name, age, sex, height, weight) {
    this.name = name || 'Man';
    this.age = age || 20;
    this.sex = sex || 'man';
    this.height = height || 170;
    this.weight = weight || 55;
}

function Worker(name, age, sex, height, weight, workPlace, cost) {
    Human.apply(this, [name, age, sex, height, weight]);
    this.workPlace = workPlace || 'Nooo(';
    this.cost = cost || '0$';
}

Worker.prototype = Object.create(Human.prototype);
Human.prototype.constructor = Human;

Worker.prototype.work = function() {
    console.log(this);
    console.log('I work... I work... I... Zzz...');
};


function Student(name, age, sex, height, weight, studyPlace, cost) {
    Human.apply(this, [name, age, sex, height, weight]);
    this.studyPlace = studyPlace || 'PTU';
    this.cost = cost || '825грн';
}

Student.prototype = Object.create(Human.prototype);
Human.prototype.constructor = Human;

Student.prototype.lookSerial = function() {
    console.log(this);
    console.log('Breaking Bad, Sherlock, Walking Dead... It is not all...');
};


var Worker1 = new Worker('Max', 30, 'man', 175, 67, 'TurumBurum', '200$');
Worker1.work();

var Worker2 = new Worker();
Worker2.work();

var Student1 = new Student('Jane', 20, 'woman', 167, 57, 'NTU "KhPI"', '650грн');
Student1.lookSerial();

var Student2 = new Student();
Student2.lookSerial();

function GoogleCallback (func, data) {
     window[func](data);
}

function search() {
    var request = $('#search').val(),
        $results = $('#results');

    $.getJSON('http://api.riffsy.com/v1/search?tag='+request+'&limit=10',
        function (data) {
            $('#logo').attr("class", 'hide');
            $results.html('');

            for(var i = 0; i < data.results.length; i++) {
                $results.append('<img id="result--item" src="'+data.results[i].url+'">');
            }
        }
    );
}

$('#search').on('keyup', function (event) {
        if(event.keyCode == 13) {
            search();
        }
});

$('#submit').on('click', search);
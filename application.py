#index
from flask import Flask,render_template

application = Flask(__name__)

@application.route('/')
def index():
    return render_template('index.html')

@application.route('/index.html')
def index1():
    return render_template('index.html')

@application.route('/devOps.html')
def devOps():
    return render_template('devOps.html')

@application.route('/bigDataAndAI.html')
def bigDataAndAI():
    return render_template('bigDataAndAI.html')

@application.route('/demoList.html')
def demoList():
    return render_template('demoList.html')

@application.route('/DevOpsList.html')
def DevOpsList():
    return render_template('DevOpsList.html')

@application.route('/galanz.html')
def galanz():
    return render_template('galanz.html')

@application.route('/logAndScheme.html')
def logAndScheme():
    return render_template('logAndScheme.html')

@application.route('/newList.html')
def newList():
    return render_template('newList.html')

@application.route('/tsl.html')
def tsl():
    return render_template('tsl.html')


if __name__ == "__main__":
    application.debug = True
    application.run()

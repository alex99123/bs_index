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

@application.route('/BigDataList.html')
def BigDataList():
    return render_template('BigDataList.html')

@application.route('/jm.html')
def jm():
    return render_template('jm.html')

@application.route('/bmkp.html')
def bmkp():
    return render_template('bmkp.html')

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

@application.route('/Migration.html')
def Migration():
    return render_template('Migration.html')

@application.route('/MigrationList.html')
def MigrationList():
    return render_template('MigrationList.html')

@application.route('/gb.html')
def gb():
    return render_template('gb.html')

@application.route('/xc.html')
def xc():
    return render_template('xc.html')

@application.route('/msp.html')
def msp():
    return render_template('msp.html')

@application.route('/qx.html')
def qx():
    return render_template('qx.html')

@application.route('/hf.html')
def hf():
    return render_template('hf.html')

@application.route('/MspList.html')
def hf():
    return render_template('MspList.html')



if __name__ == "__main__":
    application.debug = True
    application.run()

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/service')
def service():
    return render_template('service.html')

@app.route('/architecture')
def architecture():
    return render_template('architecture.html')

@app.route('/interior')
def interior():
    return render_template('interior.html')

@app.route('/construction')
def construction():
    return render_template('construction.html')

@app.route('/renovation')
def renovation():
    return render_template('renovation.html')

@app.route('/landscape')
def landscape():
    return render_template('landscape.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

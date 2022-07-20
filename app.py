import os #importacion de la biblioteca/modulo so para las acciones del sistema operativo
from flask import Flask, render_template #importacion de Flask para nuestra aplicacion web

app = Flask(__name__, template_folder='templates/layouts') #variable que guardara nuestro archivos html
app._static_folder = os.path.abspath("templates/static/") # directorio de nuestro archivos HTML

@app.route('/') #pagina principal
def index():
    return render_template('Inicio.html') #renderizado de la pagina principal

if __name__ == '__main__':
    app.run(debug=True)
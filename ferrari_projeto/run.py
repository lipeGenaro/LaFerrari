from flask import Flask, render_template
import os

# Inicializa a aplicação Flask
app = Flask(__name__)

# Rota principal que renderiza a landing page
@app.route('/')
def index():
    return render_template('index.html')

# Configuração para execução do servidor
if __name__ == '__main__':
    # Verifica se o diretório de assets existe
    assets_dir = os.path.join(app.static_folder, 'assets')
    if not os.path.exists(assets_dir):
        os.makedirs(assets_dir)
        print(f"Diretório de assets criado: {assets_dir}")
        print("Adicione suas imagens ao diretório antes de acessar a página")
    
    # Inicia o servidor Flask
    print("Servidor Ferrari LaFerrari iniciado em http://localhost:5000")
    print("Pressione Ctrl+C para encerrar o servidor")
    app.run(host='0.0.0.0', port=5000, debug=True)

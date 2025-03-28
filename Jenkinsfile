pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Clone the Repository...') {
            steps {
                 git branch:'master', url:'https://github.com/NicholasMariga/gallery.git'
            }
        }

        stage('Install Dependencies ') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                //At the moment no tests
                sh 'echo "No tests specified"'
                //sh 'npm test || echo "No tests specified"'
            }
        }
        stage('Deploy to Render') {
            steps {
                // Start the server
                sh 'node server.js &'
            }
        }
    }

    post {
        always {
            // Clean up workspace after build
            cleanWs()
        }
    }
}
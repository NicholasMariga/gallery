pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Ensure Node.js and npm are installed
                sh 'node -v'
                sh 'npm -v'

                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Placeholder for tests (update when tests are added)
                sh 'npm test || echo "No tests specified"'
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
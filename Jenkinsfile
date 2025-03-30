pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        RENDER_URL = 'http://localhost:5000'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/NicholasMariga/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'node server.js'
            }
        }
    }

    post {
        success {
            slackSend(
                channel: '#devops09', 
                color: 'good', 
                message: "✅ Build Successful! \n*Job:* ${env.JOB_NAME} \n*Build:* #${env.BUILD_NUMBER} \n*URL:* <${env.BUILD_URL}|View Build>"
            )
        }
        failure {
            slackSend(
                channel: '#devops09', 
                color: 'danger', 
                message: "❌ Build Failed! \n*Job:* ${env.JOB_NAME} \n*Build:* #${env.BUILD_NUMBER} \n*URL:* <${env.BUILD_URL}|View Build>"
            )
        }
    }
}

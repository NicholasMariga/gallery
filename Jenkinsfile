pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        SLACK_CHANNEL = '#nicholasmariga_ip1'
        RENDER_SERVICE_NAME = 'gallerynick'
        RENDER_URL = 'https://gallery-71p3.onrender.com/' 
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

        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId: 'RENDER_API_KEY', variable: 'RENDER_API_KEY')]) {
                    sh """
                    curl -X POST "https://api.render.com/v1/services/${RENDER_SERVICE_NAME}/deploys" \
                        -H "Accept: application/json" \
                        -H "Authorization: Bearer ${RENDER_API_KEY}" \
                        -d ''
                    """
                }
            }
        }
    }

    post {
        success {
            slackSend(
                channel: SLACK_CHANNEL, 
                color: 'good', 
                message: """
                Build & Deploy Successful!
                *Job:* ${env.JOB_NAME}
                *Build:* #${env.BUILD_NUMBER}
                *Build URL:* <${env.BUILD_URL}|View Build>
                *Render URL:* <${env.RENDER_URL}|Visit Application>
                """
            )
        }
        failure {
            slackSend(
                channel: SLACK_CHANNEL, 
                color: 'danger', 
                message: "Build & Deploy Failed! \n*Job:* ${env.JOB_NAME} \n*Build:* #${env.BUILD_NUMBER} \n*URL:* <${env.BUILD_URL}|View Build>"
            )
        }
        aborted {
            slackSend(
                channel: SLACK_CHANNEL, 
                color: 'warning', 
                message: "Build Aborted! \n*Job:* ${env.JOB_NAME} \n*Build:* #${env.BUILD_NUMBER} \n*URL:* <${env.BUILD_URL}|View Build>"
            )
        }
    }
}

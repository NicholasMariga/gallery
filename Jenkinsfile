pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'
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
                sh 'echo "No tests specified"'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'node server.js'
            }
        }
    }

// post {
//         success {
//             script {
//                 def buildID = currentBuild.number
//                 def message = """
//                 :white_check_mark: *Build #${buildID} Deployed Successfully!*  
//                 🌍 *Render URL:* ${env.RENDER_URL}  
//                 🕒 *Time:* ${new Date()}  
//                 """
                
//                 sh """
//                 curl -X POST -H 'Content-type: application/json' --data '{"text": "${message}"}' https://hooks.slack.com/services/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
//                 """
//             }
//         }
//         failure {
//             script {
//                 def buildID = currentBuild.number
//                 def message = """
//                 :x: *Build #${buildID} Failed!*  
//                 Check Jenkins logs for details.
//                 """

//                 sh """
//                 curl -X POST -H 'Content-type: application/json' --data '{"text": "${message}"}' $SLACK_WEBHOOK_URL
//                 """
//             }
//         }
//     }    
}




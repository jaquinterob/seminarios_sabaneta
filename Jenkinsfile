pipeline {
    agent any
    stages {

        stage('npm install') {
            steps {sh 'sudo npm install'}
        } 

        stage('Build') {
            steps {sh 'sudo ng build --prod --base-href=/test/'}
        }
        
        stage('Deploy') {
            steps {sh 'sudo cp -r dist/seminariosSabaneta/* /var/www/html/test/'}
        }
        
    }
}

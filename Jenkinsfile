pipeline {
    agent any
    stages {

        stage('npm install') {
            steps {sh 'sudo npm install'}
        } 

        stage('lint') {
            steps {sh 'sudo ng lint --fix'}
        }

        stage('Build') {
            steps {sh 'sudo ng build --prod --base-href=/test/primaria/'}
        }
        
        stage('Deploy') {
            steps {sh 'sudo cp -r dist/seminariosSabaneta/* /var/www/html/test/primaria/'}
        }
        
    }
}

pipeline {
    agent any
    stages {

        // stage('npm install') {
        //     steps {sh 'sudo npm install'}
        // } 

        // stage('Sonar') {
        //     steps {sh 'sudo npm run sonar'}
        // }

        // stage('Lint') {
        //     steps {sh 'sudo ng lint'}
        // }

        // stage('Test') {
        //     steps {sh 'sudo ng test --watch=false'}
        // }

        // stage('Build') {
        //     steps {sh 'sudo ng build --prod --base-href=/seminarios_sabaneta/'}
        // }
        
<<<<<<< HEAD
        //  stage('Deploy') {
        //     steps {sh 'sudo cp -r dist/seminarios_sabaneta/* /var/www/html/test/seminarios_sabaneta/'}
        // } 

        stage('Docker make image') {
            steps {sh 'sudo docker build . -t seminarios_sabaneta:latest'}
        } 
        stage('Docker run') {
            steps {sh 'sudo docker run -d -p 2595:80 seminarios_sabaneta:latest'}
        } 
        
    }
}

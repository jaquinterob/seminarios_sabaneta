pipeline {
    agent any
    stages {

        stage('Lint') {
            steps {sh 'sudo ng lint'}
        } 

        // stage('Test') {
        //     steps {sh 'sudo ng test --browsers ChromeHeadless'}
        // } 

        stage('Docker stop') {
            steps {sh 'sudo docker stop seminarios'}
        } 
        
         stage('Docker rm') {
            steps {sh 'sudo docker rm seminarios'}
        } 

         stage('Docker make image ') {
            steps {sh 'sudo docker build . -t seminarios_sabaneta:latest'}
        } 

        stage('Docker run') {
            steps {sh 'sudo docker run -d -p 2595:80 --name seminarios seminarios_sabaneta:latest'}
        } 
        
    }
}

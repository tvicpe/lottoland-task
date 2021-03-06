# Lottoland Test

This is a test task project.  

[Prerequisites](#prerequisites)  
[Git Repository](#git-repo)  
[Installation](#installation)  
[Demo](#demo)  


## <a name="prerequisites"></a> Prerequisites
This project is based on Angular-cli, hence in order to install it localy you have to have this tool on your machine. This is the entire list of requirements your environment should meat in order to support this project:  
git: >=2.15.1  
npm: >=5.6.0  
node: >=8.11.1  
angular-cli: >=6.0.3  
  
## <a name="git-repo"></a> Git Repository
Git repository of this project is located on [https://github.com/tvicpe/lottoland-task](https://github.com/tvicpe/lottoland-task)
  
## <a name="installation"></a> Installation
1. checkout the project on your local machine:
    ```
    git clone https://github.com/tvicpe/lottoland-task
    ```
2. move into the project's directory:
    ```
    cd ./lottoland-task
    ```
3. install `npm` dependencies:
    ```
    npm install
    ```
4. start angular-cli project:
    ```
    npm start
    ```
5. access the project in your browser by navigatin to [http://localhost:4200](http://localhost:4200)
6. WARNING!  
Taking in consideration that json feed is on other domain, you have to include cors-headers 
on the backend side while generating this json file. In order to test it as it is,
please disable web-security in your browser to avoid CORS issue.  
More information can be found here: [https://stackoverflow.com/questions/35432749/disable-web-security-in-chrome-48](https://stackoverflow.com/questions/35432749/disable-web-security-in-chrome-48)
7. Enjoy!
    
## <a name="demo"></a> Demo
A live demo of this project is available on [http://lotto.tomsa.md](http://lotto.tomsa.md)

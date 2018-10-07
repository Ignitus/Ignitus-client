# Contributing

1. Create your **branch**: ```git checkout -b my-new-feature```

2. **Commit** your changes: ```git commit -m 'Add some feature'```

3. **Push** to the branch: ```git push origin my-new-feature```

4. Send a **Pull Request**

5. **Enjoy!**

## Setup locally

* Clone or download the repo. into any fresh temporary folder.

    ``` git clone https://github.com/Ignitus/Ignitus-Client-Side-Development.git ```

* Cd into that root folder you just cloned locally.

    ``` cd Ignitus-Client-Side-Development ```

* Open terminal in the current folder and to install all dependencies type.

    ``` npm install ```

* Now typing

    ``` npm start ```

* will start a server ! on http://localhost:3000

## Setup Via Docker

* Run ```docker-compose up```
 
 Add the mongoURL in db.js and then recreate the docker image.
 
 * ```docker-compose up -d --force-recreate --build```



# dronut

### Deployed App
* [Frontend](https://dronuts-frontend-344601.ue.r.appspot.com)
* [Backend](https://dronuts-backend-344601.ue.r.appspot.com)

### Web Framework
We've decided to use <b>Express</b> as our web framework, for these reasons:

* Learning curve and developers’ previous experience
* Community support and overall industry use/adaptation
* Integration with other third party libraries and API’s
* Simplicity and ease of use


### QA/Helpful Tools We Have Set up 

* <b>Eslint</b> is the linter our group uses. We use it to automatically lint our code through the eslint plugin for vscode, and we additionally configured github-action to run the linter as a step of the CI process for every commit. 

* <b>Mocha</b> is our backend testing framework, and we configured github-actions to run our tests located in the "dronuts-backend/test/" directory for every commit as a step of the CI process. 

* <b>Chai</b> is used to validate backend object data models.

* <b>npm-check</b> is the tool we use for detecting dependency updates. As it is meant to be installed globally through npm, we didn't include it in package.json

### Deployment
1. You should have received an email about signing-up/accepting a assignment/lab
from Microsoft, related to the class and registering with azure. Let us know 
if you haven't. We recommend using the [Azure Cli](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest) 
to access your account info.

2. Using your Azure credentials, follow [these instructions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/docker-machine) to manually
setup a Virtual Machine suitable for running Docker **with the following considerations**:
  * Instead of `myvm` use your project team name as your Docker Machine name.
  * Use "Standard_A1_v2" as the plan name / VM size.
  * Before running docker-create (creating your VM), make sure to additionally
  add the flag/option **--azure-resource-group cmu-17-356** when running the command.
  * The full command you'll run should look something like this:
    ```shell
    docker-machine create -d azure \
    --azure-subscription-id $sub \
    --azure-ssh-user azureuser \
    --azure-open-port 80 \
    --azure-resource-group cmu-17-356 \
    --azure-size "Standard_A1_v2" \
    $repository_name
     ```
  * **stop before the step "run a container"**.
  * Copy the IP address of your VM and your *$repository_name* (i.e. project/machine-name) into your Github Actions `.yml`
  * If you've set that ENV var, Run `cp -r "$DOCKER_CERT_PATH" ./azure`to copy your deployment certificates
  into your repository. Otherwise, you can run `cp -r ~/.docker/machine/machines/$repository_name/* ./azure`

This should enable automatic deployment via Github Actions!

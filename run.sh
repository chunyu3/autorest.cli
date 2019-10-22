cp -rf --verbose /source/dist /autorest.cli
cp -rf --verbose /source/input /autorest.cli
autorest --cli --use=/autorest.cli --mm --intermediate --python-sdks-folder=/generated --output-folder=/generated $1
cd /magic-modules; compiler.rb -e terraform -c azure -p /generated/magic-modules-input/alertsmanagementsmartdetectoralertrule -o /mmoutput
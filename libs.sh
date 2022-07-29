#!/bin/bash
set -e
DIR="$( cd "$( dirname "$0" )" && pwd )"

VERSION="v2.9.0"
URL="https://github.com/mcjambi/react-native-pjsip-builder/archive/refs/heads/main.zip"
# URL="https://github.com/mcjambi/react-native-pjsip-builder/archive/refs/tags/${VERSION}.tar.gz"
LOCK="${DIR}/.libs.lock"
DEST=".libs.tar.gz"
DOWNLOAD=true

if ! type "wget" > /dev/null; then
    echo "Missed wget dependency" >&2;
    exit 1;
fi
if ! type "tar" > /dev/null; then
    echo "Missed tar dependency" >&2;
    exit 1;
fi

if ! type "unzip" > /dev/null; then
    echo "Missed unzip dependency" >&2;
    exit 1;
fi

if ! type "git-lfs" > /dev/null; then
    echo "Missed git-lfs dependency" >&2;
    exit 1;
fi

if [ -f ${LOCK} ]; then
    CURRENT_VERSION=$(cat ${LOCK})

    if [ "${CURRENT_VERSION}" == "${VERSION}" ];then
        DOWNLOAD=false
    fi
fi

if [ "$DOWNLOAD" = true ]; then
    wget "${URL}" -O "${DEST}"
    tar -xvf "${DEST}"
    rm -f "${DEST}"
    echo "${VERSION}" > ${LOCK}

    echo "Make dist folder ..."
    mkdir -p "${DIR}/dist"

    echo "Go to dist folder ..."
    cd "${DIR}/dist"

    wget "https://github.com/VoIPGRID/Vialer-pjsip-iOS/archive/3.5.zip" -O "3.5.zip"
    wget "https://media.githubusercontent.com/media/VoIPGRID/Vialer-pjsip-iOS/3.5/VialerPJSIP.framework/Versions/A/VialerPJSIP" -O "VialerPJSIP"
    unzip "3.5.zip"
    unlink "3.5.zip"

    mkdir -p "${DIR}/ios/VialerPJSIP.framework"

    # mv -vn "${DIR}/dist/Vialer-pjsip-iOS-3.5/VialerPJSIP.framework/Versions/Current/*" "${DIR}/ios/VialerPJSIP.framework"
    cp -R "${DIR}/dist/Vialer-pjsip-iOS-3.5/VialerPJSIP.framework/Versions/Current/Headers" "${DIR}/ios/VialerPJSIP.framework"
    mv "${DIR}/dist/VialerPJSIP" "${DIR}/ios/VialerPJSIP.framework/VialerPJSIP"

    # then remove all dist 
    rm -Rf "${DIR}/dist"
fi

if [ "$DOWNLOAD" = false ]; then
    CURRENT_VERSION=$(cat ${LOCK})
    echo "I have downloaded! Check it again or remove ${LOCK} file. ${CURRENT_VERSION}"
fi


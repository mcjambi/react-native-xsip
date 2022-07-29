#!/bin/bash
set -e

VERSION="v2.9.0"
URL="https://github.com/mcjambi/react-native-pjsip-builder/archive/refs/heads/main.zip"
# URL="https://github.com/mcjambi/react-native-pjsip-builder/archive/refs/tags/${VERSION}.tar.gz"
LOCK=".libs.lock"
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
fi

if [ "$DOWNLOAD" = false ]; then
    CURRENT_VERSION=$(cat ${LOCK})
    echo "I have downloaded! Check it again or remove ${LOCK} file. ${CURRENT_VERSION}"
fi

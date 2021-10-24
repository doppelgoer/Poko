import axios from 'axios';
const headAddress = `http://localhost`;

export default function axiosFun(_method, _url, _data) {
  return new Promise(async (resolve, reject) => {
    // console.log(_method, _url, _data);

    let dataFromServer;
    if (_method === 'GET' || _method === 'get') {
      try {
        // console.log(12312312321);
        dataFromServer = await axios({
          //token
          method: _method,
          url: `${headAddress}/${_url}`,
          params: _data,
        });
        // console.log(dataFromServer);
        resolve(dataFromServer.data);
      } catch (e) {
        console.log(e);
      } //end try catch
    } //end if
    else if (
      _method === 'POST' ||
      _method === 'PUT' ||
      _method === 'DELETE' ||
      _method === 'post' ||
      _method === 'put' ||
      _method === 'delete'
    ) {
      console.log('도려나??');
      console.log(_data);
      try {
        dataFromServer = await axios({
          //token
          method: _method,
          url: `${headAddress}/${_url}`,
          data: _data,
        });
        return resolve(dataFromServer.data);
      } catch (e) {
        console.log(e);
      } //end try catch
    } //end else if
    else {
      return reject(console.log('에러'));
    } //end else
    // console.log(555,dataFromServer);
    //             return dataFromServer
  });
}

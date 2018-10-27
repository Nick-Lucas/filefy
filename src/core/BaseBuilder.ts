export default class BaseBuilder {  
  protected exportFile(dataType: string, fileName: string, data: string) {
    var charBom = "\uFEFF";
    let content = `data:text/${dataType};charset=utf-8,${charBom}${data}`;    
    var encodedUri = encodeURI(content);

    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);

    link.click(); 
  }
}
const Footer = () => {
  return (
    <div>
      <p className="Footer">For mere info, ring til Jytte på tlf 45343366</p>
      <p>
        Applikationer at installere i react-projekter\n
        ---------------------------------------------\n Installér react-app:\n
        npx create-react-app@latest . \n doc:
        https://reactjs.org/docs/getting-started.html Installér json-server: npx
        json-server --watch [db path] --port [port nr fx 8000] doc:
        https://github.com/typicode/json-server Installér Emotion: npm install
        --save @emotion/react Doc:https://emotion.sh/docs/install Installér
        react-icons: npm install react-icons --save
        https://react-icons.github.io/react-icons Installer React Router-DOM npm
        install react-router-dom@6 Doc:
        https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation
        Installér React Hook Form npm install react-hook-form Doc:
        https://react-hook-form.com/ Installer React simple slider npm install
        react-simple-image-slider --save
        https://www.npmjs.com/package/react-simple-image-slider
      </p>
    </div>
  );
};

export default Footer;

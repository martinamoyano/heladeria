import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from "./components/ProductCard";
import NavBar from './components/NavBar';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.mockfly.dev/mocks/a63eaabf-94e4-4feb-aa29-c3891e23efc0/flavours')
      .then(res => res.json())
      .then(data => {
        const flavors = data.flavours; 
        setProducts(flavors); 
      })
      .catch(error => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section id="inicio">
          <div>
          <h3>esto es el inicio</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat laborum perspiciatis nemo explicabo minus cum pariatur dignissimos consequatur error dolorem veritatis, fuga fugit quo tempore expedita, in beatae eius! Quo.
          Eum sapiente ullam vero sunt neque. Deleniti, dolore repudiandae? Deleniti eum delectus assumenda ab necessitatibus quae officia consequuntur autem nam praesentium magni, dolorem, tenetur omnis hic officiis. Eveniet, consequuntur ullam?
          Provident cumque, aperiam saepe maxime explicabo adipisci hic optio odit non voluptas vitae quo necessitatibus, eaque libero repellat expedita beatae quas iusto esse ullam dolorem quod. Assumenda eaque ad nulla.
          Dolore officiis numquam vero repellat eum aperiam, atque totam autem nemo excepturi cum est saepe, facilis incidunt facere fuga. Corporis error assumenda necessitatibus qui facilis, at nihil ipsam mollitia non?
          Nesciunt, excepturi asperiores, ut odit molestiae maiores optio mollitia praesentium cum voluptates repudiandae reprehenderit iusto expedita culpa aliquam magnam amet aspernatur voluptatibus? Harum repellendus adipisci labore reiciendis corporis iste nam.
          Eaque soluta alias doloremque est, harum consectetur aliquid quis repudiandae. Earum, recusandae architecto, quae aliquid tempore cumque eum eveniet provident eos ab vel cupiditate nam sapiente quos nihil, sit consequatur!
          Quia ea consequuntur illum eligendi eum cumque quidem ut deserunt voluptatem sapiente perferendis maiores excepturi, quisquam consectetur perspiciatis inventore, eveniet molestias similique repellendus repellat assumenda itaque laborum iure. Ex, quas.
          Beatae earum optio corrupti ipsum qui natus cumque nobis incidunt, culpa cupiditate repellat ratione soluta temporibus error autem dignissimos officiis, ipsam ea. Illum harum assumenda maiores aliquam dolores id numquam!
          Quo voluptatibus fuga totam minus libero nostrum pariatur inventore voluptas velit accusantium, accusamus illo doloremque, tempore ipsam similique amet cum itaque dolorem? Fugiat excepturi vel laborum aspernatur dicta voluptatibus. Obcaecati.
          Libero quae obcaecati quisquam, vel, recusandae nam consequuntur maiores deleniti repellat blanditiis quaerat facilis sit? Impedit, unde ipsam, aperiam ad quasi temporibus eaque nihil quo alias est labore deleniti deserunt!
          Non distinctio eaque enim nemo omnis reiciendis ducimus voluptates porro dolore! Quod error deserunt, sequi natus quis soluta nemo nam iste velit assumenda consequatur. Quae ipsa modi rerum incidunt iste!
          Recusandae, commodi in. Perferendis incidunt ipsum unde doloremque magnam molestiae laboriosam? Sequi, delectus distinctio magni ut explicabo ea tenetur reiciendis, facere nemo fugit temporibus quo officia earum veritatis quibusdam quis.
          Veritatis, esse reprehenderit? Dolor dolores eos commodi. Velit fuga incidunt perferendis, quisquam vitae similique nihil magni provident doloribus sit suscipit culpa nam, architecto ut asperiores. Sint nesciunt aut modi expedita.
          Vitae quis cum explicabo similique iusto? Cum iure veniam adipisci impedit accusamus fuga voluptatibus, hic error, itaque beatae magni pariatur id repudiandae voluptatem esse quibusdam cumque sit vel optio consectetur.
          Id porro aspernatur explicabo fuga natus necessitatibus odit deleniti. Eveniet molestiae fuga sequi voluptates. Quas odit, ipsum esse fuga ducimus quidem voluptatum est. Obcaecati distinctio nemo possimus reprehenderit repellendus? Quae?
          Quidem, neque inventore reprehenderit deserunt, ab voluptatibus optio iste, in recusandae quos distinctio ratione eveniet accusantium porro nam alias maxime! Numquam fuga unde velit eius, dicta in optio necessitatibus blanditiis.
          Nesciunt quibusdam molestias hic minus nisi mollitia veritatis facilis eius ea deserunt aliquid dolores recusandae corporis dolor perspiciatis enim architecto veniam quia alias dignissimos expedita voluptatem, nulla iure? Officia, alias?
          Nostrum doloremque dolore tenetur animi eveniet incidunt reprehenderit, sequi, nisi blanditiis magnam, quas ipsa quo iure numquam atque eligendi. Ex sapiente similique veniam perspiciatis obcaecati doloremque ipsum quo dolorum id?
          Iure velit ducimus vel veritatis animi quis sit, possimus illo ipsa delectus vero saepe eveniet veniam dicta tempora fugit voluptatum dolores impedit consequuntur cum a at consectetur aliquam repudiandae? Natus.
          Itaque aspernatur architecto iure at optio fuga praesentium obcaecati a porro expedita, ea earum eum non velit sequi possimus odio soluta eaque maiores minus. Repudiandae dolorum aperiam laboriosam quibusdam necessitatibus.
          Eligendi qui reiciendis aut officia natus. Saepe, ratione. Unde, a accusamus! Fugiat, aperiam. Iusto pariatur tempora, dolorem magni id saepe nesciunt dignissimos nisi quidem? In similique inventore consequuntur voluptatibus nam!
          Necessitatibus, eligendi impedit vero porro eos officiis sunt, quisquam molestias rerum saepe similique facere suscipit blanditiis numquam illo accusamus. Blanditiis necessitatibus officiis fugiat debitis recusandae nulla vel beatae saepe dicta.
          Nisi delectus magnam aut adipisci dolorum corporis asperiores, reprehenderit eligendi voluptates, ratione aliquam in fuga esse, molestias error sed. Sapiente corporis ut perspiciatis expedita voluptate quis aliquam tenetur necessitatibus nisi.
          Omnis id necessitatibus doloribus illum ex recusandae, labore laborum aut eum. Perferendis possimus sunt, libero unde enim eius harum mollitia dolorum? Soluta mollitia earum nesciunt. Sequi ut dicta id possimus?
          Tempore illo harum doloremque et laudantium laborum quidem delectus aut magni eius culpa, fuga reprehenderit minus consequuntur sunt quae. Voluptate hic ad nobis quaerat? Deleniti quae pariatur saepe perferendis delectus.
          Impedit, quaerat est? Reprehenderit fugiat facere quam, placeat voluptates quasi ipsam, delectus molestiae architecto porro consectetur repudiandae modi. Sequi vero alias magnam consequuntur explicabo illum saepe amet suscipit ut fugit.
          Dolor, voluptas voluptatum iure officiis assumenda repudiandae aliquid harum? Ducimus ratione molestias dolores sunt? Maiores sint tenetur, alias explicabo aliquid sapiente ipsam sequi minima quasi at earum fugiat unde amet.
          Esse, itaque! Error rem possimus laboriosam placeat aliquid nam fugit provident doloremque explicabo! Obcaecati velit tempore quis delectus modi cum ea omnis, consequuntur at libero sapiente laboriosam voluptatum dignissimos iste.
          Rerum a eaque iusto amet officiis maiores cumque odit? Cupiditate, itaque ratione placeat cumque iusto vel ducimus beatae voluptatibus velit nemo repellat modi facilis error magnam necessitatibus deserunt autem quod?
          Dolorem, aperiam. Sit optio ipsum dolore ad repellat quia, corporis accusamus non rem quam temporibus fugit, vero nostrum cumque! Voluptas eaque incidunt, quod quasi facere asperiores dolor aperiam. Aliquam, quia.
          Rem at accusamus minima nobis repellat, non ipsum! Officia, dicta doloremque ad ut voluptatem minima modi praesentium nisi cumque quasi! Explicabo quia saepe ab sapiente dolores sit in quasi error.
          Eligendi hic reprehenderit qui in tenetur praesentium recusandae officia architecto possimus cum delectus eveniet nam, consequatur sint dolore impedit enim aspernatur sunt quas est? Praesentium dolore eius nisi maiores placeat!
          Et vero architecto, harum quod voluptate expedita vitae enim minus? Cupiditate soluta minus expedita! Atque quos dolorem impedit labore dignissimos adipisci aperiam ut, perferendis aspernatur numquam est odit vero nostrum.
          Cupiditate distinctio aliquam aperiam quae odio quia voluptatum voluptate debitis quis, sint quo hic ducimus dolorem dolor at obcaecati repellat consequuntur quod nesciunt eius modi perferendis ab. Quis, voluptatem distinctio!
          Omnis sequi ratione quas pariatur. Eius doloribus alias consequatur et iusto explicabo maiores quo magni nobis ab itaque mollitia nesciunt, quam enim aliquam repudiandae suscipit ratione commodi exercitationem officiis. Dignissimos!
          Reiciendis magnam doloribus error quas, veritatis id quibusdam ipsa consequatur, a veniam dolor, ad facere temporibus dolorum esse. Aliquid, sapiente voluptatum necessitatibus eum at quia harum exercitationem error doloribus quas.
          A repellat exercitationem illum officia id? Officiis accusantium laudantium quis at ipsam nam tenetur veritatis doloribus perspiciatis esse. Nihil laudantium aperiam eos similique nobis aut earum maxime a sapiente tempora.
          Tenetur, voluptatem dicta ea porro vel sint consequuntur doloremque culpa facere tempora nobis iste dolorem sunt reiciendis iusto provident dolorum ducimus ex itaque. Repudiandae ratione reprehenderit magnam, unde tenetur consequuntur.
          Totam impedit cum unde, commodi doloribus quis, aliquam tempora rem dignissimos quasi nulla doloremque. Dolorem perspiciatis numquam aliquam corrupti maxime, similique mollitia, nostrum aliquid ab sapiente ut tempore sint! Vitae?
          Nihil sint delectus distinctio impedit, molestias minus obcaecati odit facilis. Enim, aspernatur fugit! Autem, numquam nisi aspernatur harum facilis, quos magni assumenda fugiat asperiores accusantium maxime quibusdam voluptatibus eaque dolorum.
          Nemo sequi quisquam eius illo in alias, porro error obcaecati ipsa distinctio cupiditate ad est commodi non aliquam, laborum voluptatibus! Sequi possimus non vero, cum pariatur modi cumque nemo provident.
          Nesciunt vel ut quasi. Repellat dignissimos non expedita perferendis nisi recusandae itaque voluptate minus accusantium quas nihil veniam distinctio ratione delectus alias aut ducimus, nesciunt soluta eius odit! Provident, neque.
          Reiciendis illum perspiciatis placeat, temporibus mollitia voluptatem voluptate a repellat quas vitae inventore assumenda, modi fuga dolore eaque distinctio sequi minima expedita veritatis tenetur necessitatibus deserunt? Numquam nisi id repellat!
          Architecto dolore, sint obcaecati cumque quis corrupti officiis sequi consectetur quod vitae laboriosam. Veritatis reiciendis voluptatem enim. Officia delectus molestiae animi inventore ab non odio dignissimos magni deleniti, velit nihil!
          Architecto magnam eum, error reprehenderit, dolorum iste ab velit, fugit dolore accusantium cumque? Quis voluptatum, repudiandae blanditiis natus amet eos vero perspiciatis nesciunt. Dicta saepe maxime id velit eligendi dolore!
          Incidunt laboriosam ipsam sit commodi, mollitia soluta aspernatur optio non odio doloremque vero neque id unde repellat itaque quae, voluptate in! Velit, maiores ipsum. Aut cupiditate inventore neque earum excepturi.
          Adipisci, quidem corrupti obcaecati, iste sapiente dolorum voluptatum odio cupiditate ipsa iusto illum accusantium, quas dolor hic quis soluta autem nihil voluptatibus pariatur molestiae sed ullam ducimus ipsam ab! Adipisci.
          Adipisci natus dolorem a nobis nihil illo explicabo recusandae voluptas asperiores, voluptatum et? Labore totam, voluptatum, tempore sapiente officiis deserunt quod quidem necessitatibus rem sint tempora et nihil. Mollitia, maxime.
          Debitis, voluptates quas esse temporibus repudiandae quam, eaque quis totam sapiente enim beatae dolor aliquid tempore voluptatem velit natus dignissimos consequuntur nemo quod ea recusandae odio distinctio! Facilis, error deleniti!
          Laborum animi vel provident quae ullam, voluptatum dolor. Perferendis molestias ipsum id odit atque magnam minima ad necessitatibus inventore. Ipsam delectus tenetur assumenda harum. Temporibus eum nisi neque hic quibusdam?</p>
          </div>
        </section>
        
        <section id="sabores">
          {products.map((p, index) => (
            <ProductCard key={index} p={p} />
          ))}
        </section>
        
        <section id="quienes-somos">
          <div>
          <p>quien carajo somo?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsa ipsam laboriosam commodi iste corrupti, at quaerat sint vel magni ea nobis impedit dolores doloribus ullam accusantium. Quos, vel eius?
          Quidem, laboriosam sequi eum commodi nisi cupiditate necessitatibus unde non dignissimos. Eligendi dolore architecto porro consequatur hic atque est assumenda quod! Est optio, et autem beatae similique iste? Ea, fugit!
          Omnis, officiis dolores voluptate aut magni eum, suscipit consequuntur, perspiciatis magnam sit ipsa! Modi fugiat numquam fugit veritatis magni reprehenderit nesciunt molestias veniam, optio ipsam rerum nisi dolore delectus itaque?
          Animi quis iure atque. Iure, provident. Enim et incidunt recusandae nulla doloremque ratione officiis sapiente dolorem nostrum delectus omnis aperiam asperiores at voluptatem, sed explicabo molestiae optio sit alias nisi.
          Accusamus nemo, veritatis quasi architecto corporis saepe ad sed minus perferendis consectetur nobis accusantium non alias illo ullam obcaecati earum illum distinctio, nisi laboriosam itaque nostrum aperiam. Et, blanditiis suscipit.
          Praesentium voluptatum eius, ipsa quia suscipit iure assumenda provident consequuntur et, commodi unde exercitationem debitis dolores odit dicta repudiandae reiciendis culpa laborum eum aliquid minus temporibus tenetur! Fuga, ipsa. Commodi?
          Minus quibusdam dolorum officia optio voluptatem sapiente cum veniam molestiae est reprehenderit? Modi mollitia, veritatis fugiat pariatur porro eos maiores alias nemo praesentium tempore quos totam fuga reiciendis repellendus quibusdam?
          Magnam natus vero fuga, unde, soluta voluptates facere quae magni ratione dignissimos, dolore cupiditate! Maiores iste omnis quasi eaque ipsa, sed, optio quo similique perspiciatis distinctio consequatur non? Voluptate, sed!
          Harum blanditiis excepturi, doloribus deleniti eligendi architecto in eveniet totam, quod culpa ut impedit inventore aperiam, corrupti voluptatibus nemo dolorum repudiandae facilis illum earum. Harum autem aperiam at vero placeat.
          Nostrum repudiandae, voluptate aspernatur error cum, neque ab, tempore numquam maiores atque culpa. Soluta rem accusamus beatae commodi harum, fuga quia a temporibus? Tenetur, odio doloremque magnam quod ullam eaque?
          Ducimus aliquam dolor optio sint suscipit nihil voluptatibus, officiis voluptatum distinctio, est, ea veniam neque error tenetur consequuntur a assumenda nisi tempore praesentium corrupti temporibus laboriosam! Molestiae modi atque animi?
          Impedit sunt vel itaque corrupti iure voluptatibus est magni aperiam porro iste a eum, ducimus accusamus mollitia id consequatur praesentium reiciendis tenetur dignissimos blanditiis quisquam exercitationem neque. Quia, tempore asperiores.
          Minus ea reprehenderit ipsa explicabo mollitia aperiam ab rerum beatae vel maiores eos iste eligendi non, asperiores laborum quos. Distinctio error numquam atque minima quia inventore ex omnis? Facilis, ipsam?
          Ducimus aliquid amet itaque minima omnis blanditiis nulla, reprehenderit quidem delectus perspiciatis aut! In fugiat excepturi commodi modi eveniet odio obcaecati, tempore reiciendis similique fuga eius sapiente dignissimos porro perspiciatis.
          Libero maiores corrupti iure cupiditate unde iste rem cumque eum! Ea laudantium a cupiditate doloremque sapiente impedit fugiat cumque sequi! Expedita possimus facere nostrum doloribus similique, omnis deleniti quisquam voluptate?
          Reprehenderit fugiat incidunt consequuntur voluptas, quidem eaque officiis eius quis totam doloremque, ratione dolorem quibusdam. Assumenda autem porro optio perferendis, praesentium aliquid fugiat natus suscipit modi incidunt, dolorem mollitia officiis?
          Voluptatem, velit labore error delectus quod magnam quia sed sequi dolor ad commodi repudiandae neque odit eligendi blanditiis vel dolorem modi laudantium corporis eos at ab dicta doloremque? Natus, exercitationem?
          Eum labore eveniet dolorem saepe. Id inventore tempora ea illum sequi maxime eius dolorum distinctio optio, obcaecati eligendi aliquam velit tenetur, labore, quas quibusdam. Illum quibusdam nemo maiores velit reprehenderit?
          Odit magnam voluptatum, qui quis, quaerat itaque non magni, excepturi dolor ullam dolores in. Animi, cum? Atque nemo, dolores sequi unde perferendis dolore similique blanditiis aliquid, officia obcaecati, perspiciatis minus!
          Neque vero sint quis ipsum quibusdam sunt voluptatem recusandae aliquid iusto voluptatum, explicabo suscipit accusamus eligendi saepe sapiente incidunt ducimus ullam nostrum. Deserunt quia adipisci, tempora molestiae velit inventore temporibus!</p>
          </div>
        </section>
        
        <section id="contacto">
          <h4>hablemos </h4>
        </section>
      </main>
    </>
  );
}

export default App;



export interface Props {
  abstract: string,  
  copyright: string,
  
  siteMap: {
    title: string,
    href: string,
    links?: { 
      title: string,
      href: string 
    }[],
    extra?: { 
      title: string,
      href: string 
    }
  }[]
  
  developerBy: {
    name: string,
    href: string
  },
}

export default function Footer( props: Props ) {
  return (
    <section class="bg-blue py-40 h-auto">
      <div class="my-container">
        <div class="flex text-white">

          <div>
            <p >{props.abstract}</p>
            <div>
              <p>&#169; {props.copyright}</p>
              <p>DESENVOLVIDO POR <a href={props.developerBy.href}>{props.developerBy.name}</a></p>
            </div>
          </div>
          
          <div class="w-full text-uppercase">
            <ul>
              {
                props.siteMap.map((map, index) => {
                  return (
                    <>
                      <li key={'site-map-' + index} class="font-bold"><a href={map.href}>{map.title}</a></li>
                      { map.links?.length && (
                        <ul>
                          {
                            map.links.map((link, index) => {
                              return (
                                <li key={'map-site-link' + index}><a href={link.href}>{link.title}</a></li>
                              )
                            })
                          }
                        </ul>
                      ) }
                      { map.extra && (
                        <>
                          <br/>
                          <a href={map.extra?.href} class="font-bold">{map.extra?.title}</a>
                        </>
                      )}
                    </>
                  )
                })
              }
            </ul>
          </div>

          <div><a href=""><img class="w-40" src="./white-logo.png" alt=""/></a></div>
        </div>
      </div>
    </section>
  );
}

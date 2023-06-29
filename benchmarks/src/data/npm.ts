/* eslint-disable quotes */

export default {
  _id: '@nrsk/sigma',
  _rev: '43-f06211a95ccc63c24c9bb3871bbcebac',
  name: '@nrsk/sigma',
  'dist-tags': { latest: '3.6.3' },
  versions: {
    '1.0.0': {
      name: '@nrsk/sigma',
      version: '1.0.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      main: './index.js',
      types: './index.d.ts',
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'tsc -p tsconfig.build.json',
        'build:release': 'npm run build && npx shx cp -r dist/* .',
        'build:watch': 'tsc -w -p tsconfig.build.json',
        prebuild: 'rimraf dist',
        prepare: 'husky install',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        'style:check': 'npm run style:format:check && npm run style:lint:check',
        'style:fix': 'npm run style:format:fix && npm run style:lint:fix',
        'style:format:check': 'prettier --check "**/*.{js,ts,json}"',
        'style:format:fix': 'prettier --write "**/*.{js,ts,json}"',
        'style:lint:check': 'eslint --ext .js,.ts .',
        'style:lint:fix': 'eslint --fix --ext .js,.ts .',
        test: 'jest',
        'test:with-coverage': 'jest --coverage',
        'test:watch': 'jest --watch'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^13.1.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.0',
        '@semantic-release/git': '^10.0.0',
        '@types/jest': '^27.0.2',
        '@types/node': '^14.17.19',
        '@typescript-eslint/eslint-plugin': '^4.31.2',
        '@typescript-eslint/parser': '^4.31.2',
        eslint: '^7.32.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.2',
        jest: '^27.2.2',
        'lint-staged': '^11.1.2',
        prettier: '^2.4.1',
        rimraf: '^3.0.2',
        'semantic-release': '^18.0.0',
        'ts-jest': '^27.0.5',
        'ts-node': '^10.2.1',
        typescript: '^4.4.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'ebe6dcd213298b9b7424b909697316b7be5bf0ef',
      _id: '@nrsk/sigma@1.0.0',
      _nodeVersion: '14.18.1',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-3jNkt+u38SyhxSW9Cig4oeqBfAQsVqBeFsYdx+ZduD1o39hZJjCJEgR9D2Jgu+M/KwXMaY3sMiCQa8ucRNGfWQ==',
        shasum: '6e65f8c3926a76d4dd58856317f19eabb50a5ff8',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.0.0.tgz',
        fileCount: 84,
        unpackedSize: 46319,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQDGoxbFEoESLzmUMPEUXXA3ZL7lYgupCfoVo04ATaOHgwIhALUWbQxw/Mopf9phEwoD9rrbiJgA7t1G81N/m/62EDoy'
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.0.0_1636689494203_0.19455501880788906'
      },
      _hasShrinkwrap: false
    },
    '1.1.0': {
      name: '@nrsk/sigma',
      version: '1.1.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      type: 'module',
      main: './index.cjs.cjs',
      module: './index.esm.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.esm.js', require: './index.cjs.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.esm.js',
          require: './combinators.cjs.cjs',
          types: './combinators.d.ts'
        }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'npx tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:style': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'npx tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prerelease: 'npx tsm scripts/release.ts prepare',
        prepare: 'echo husky install',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage',
        'test:watch': 'jest --watch'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^14.1.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.0.2',
        '@typescript-eslint/eslint-plugin': '^5.3.1',
        '@typescript-eslint/parser': '^5.3.1',
        eslint: '^8.2.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.3.1',
        'lint-staged': '^11.2.6',
        prettier: '^2.4.1',
        rimraf: '^3.0.2',
        rollup: '^2.60.0',
        'rollup-plugin-dts': '^4.0.1',
        'semantic-release': '^18.0.0',
        'ts-jest': '^27.0.7',
        tsm: '^2.1.4',
        typescript: '^4.4.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'ac1db22277bc101a0184a8ace98335f9589a4b0d',
      _id: '@nrsk/sigma@1.1.0',
      _nodeVersion: '16.13.0',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-UJoEgUmNwvCxPWWmNRBOF5Vg1Bb24dkVmf8zIqDrbjL65ssfPs357Zi2D6haNuU3LYYCfCXO8fMVZYtWcja6Sg==',
        shasum: '5b1fa359c87b370639c3bcb2c3ef86d3f8336de0',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.1.0.tgz',
        fileCount: 14,
        unpackedSize: 35963,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQDEyN9OI5lcEHY0emIDaUlxgWbvu+r2Km914p5ppbrxkAIgGy6woAKSM1ZOlXqPeoAhYcTkgWo2FZs16YUn4eEkddc='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.1.0_1636951044420_0.29501060652363686'
      },
      _hasShrinkwrap: false
    },
    '1.1.1': {
      name: '@nrsk/sigma',
      version: '1.1.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      type: 'module',
      main: './index.cjs.cjs',
      module: './index.esm.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.esm.js', require: './index.cjs.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.esm.js',
          require: './combinators.cjs.cjs',
          types: './combinators.d.ts'
        }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'npx tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:style': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'npx tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prerelease: 'npx tsm scripts/release.ts prepare',
        prepare: 'echo husky install',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage',
        'test:watch': 'jest --watch'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^14.1.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.0.2',
        '@typescript-eslint/eslint-plugin': '^5.3.1',
        '@typescript-eslint/parser': '^5.3.1',
        eslint: '^8.2.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.3.1',
        'lint-staged': '^11.2.6',
        prettier: '^2.4.1',
        rimraf: '^3.0.2',
        rollup: '^2.60.0',
        'rollup-plugin-dts': '^4.0.1',
        'semantic-release': '^18.0.0',
        'ts-jest': '^27.0.7',
        tsm: '^2.1.4',
        typescript: '^4.4.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'cf243c50a076ecab62daac792dbaff26fba9b493',
      _id: '@nrsk/sigma@1.1.1',
      _nodeVersion: '16.13.0',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-ZCvqWz0EGZTj1y37lJvZVjDjOm+hvSWx0+jPok0y+Ow4QOJ/hSNKaHSmhaQjtYu4bbFVDF9r1Ordh3cp2J118A==',
        shasum: '48e5e09266ba8ba356edf8cccb018298dfa31cd5',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.1.1.tgz',
        fileCount: 14,
        unpackedSize: 38468,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQDaV4OJ3GhX4Sk0Y5ndC3Obx8QZJLOrGCB3UxxpAcDKbAIgWnoPHbzLUVdvSVDqMIHffdcQCzOHdXIzFXmJ4PUpR24='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.1.1_1636975876779_0.5968905867570424'
      },
      _hasShrinkwrap: false
    },
    '1.2.0': {
      name: '@nrsk/sigma',
      version: '1.2.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      type: 'module',
      main: './index.cjs.cjs',
      module: './index.esm.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.esm.js', require: './index.cjs.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.esm.js',
          require: './combinators.cjs.cjs',
          types: './combinators.d.ts'
        }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'npx tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:style': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'npx tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prerelease: 'npx tsm scripts/release.ts prepare',
        prepare: 'echo husky install',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage',
        'test:watch': 'jest --watch'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^14.1.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.0.2',
        '@typescript-eslint/eslint-plugin': '^5.3.1',
        '@typescript-eslint/parser': '^5.3.1',
        eslint: '^8.2.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.3.1',
        'lint-staged': '^11.2.6',
        prettier: '^2.4.1',
        rimraf: '^3.0.2',
        rollup: '^2.60.0',
        'rollup-plugin-dts': '^4.0.1',
        'semantic-release': '^18.0.0',
        'ts-jest': '^27.0.7',
        tsm: '^2.1.4',
        typescript: '^4.4.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'ce22000bbe79243943f86e9093dadf9c962da707',
      _id: '@nrsk/sigma@1.2.0',
      _nodeVersion: '16.13.0',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-/6/BoGFj+6I+bkgAOEyI/V4CxLRSDmnj05igpW2YjDNNUAlnmu2hy2ycmMptELcEt+aFdcmNQZrV4bhM/H82ww==',
        shasum: '358223c2e0c4c6aaaedf6a63b7a8d42c43b1bb27',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.2.0.tgz',
        fileCount: 14,
        unpackedSize: 46742,
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJhlPTrCRA9TVsSAnZWagAAQ/gQAJ4dDG7H2yxvJ1+W1C1W\ndi9FL+ko4KYZYi4u89I5JBDRXSc8eZ/h5lZ9H6+cJ/s0irxSPn1LgH8s9dVN\nVoKyJPudiLt4109Gi25Q2LUAE3McnnS+SNgT8+ZOrsJ27XORqUwIzprZoy6I\nOd7cwJudfB843ZAbbUCyvUEkO7sevD3dwoSUDkIvfSa16ebIpzH5xkE8QzFI\nihTaEaIzw/axc8h8MV6Y4DF96mswj0tuQepbJ8nGyxTYuJxqT9RB/ohV6z2X\n1DjsNcGA++mPDRS8GuXXBBbznbbB4OhGHw3TrIzsQtROSn6qCj9vCWJZa9z6\n+RRbBkLaG/cqbtAxIKJacnxwUxpV+x+OUrdGSwj0XG5MqXwMO8BL+QdW3Aau\nzlBNyE20ZhpUZ4USw5Pi7b/K93JAFFxc6jZZABIK5e0Z8Og48D5GGAjdlhso\nJZYJl+BS6yO1CrKxgM7N8C7ORDK/QOb67Anmar2dsGMTnsi+ADHpsQ1cMVFC\naOpYuobXbS4oeM0oa5ACETvDBHnod4GggkBxZ0j3D2D1C0cbS9mlobz3YYpK\nugb+1wE337LLmxN5O8aFejoHooAyl+Jt00oMRXWy6UAmEx2f+dNKohab7mGk\nYiayCP9hcp0zzuBMoN+ixKLjckkuxfTLi+xAPKEr48CVdQ666M5VBTh5jDaB\n2FdD\r\n=4WRD\r\n-----END PGP SIGNATURE-----\r\n',
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIAZiNuE7uSA0GTYUhq6kRHZ/8YXlgPaOeQjHoSfgu/GTAiEAwoSeemjaAOJIkpD22r4cq6nBU0imw83b8I94MFvqu9M='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.2.0_1637151979441_0.002630810718112331'
      },
      _hasShrinkwrap: false
    },
    '1.3.0': {
      name: '@nrsk/sigma',
      version: '1.3.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^14.1.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.0.2',
        '@typescript-eslint/eslint-plugin': '^5.3.1',
        '@typescript-eslint/parser': '^5.3.1',
        eslint: '^8.2.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.3.1',
        'lint-staged': '^11.2.6',
        prettier: '^2.4.1',
        rimraf: '^3.0.2',
        rollup: '^2.60.0',
        'rollup-plugin-dts': '^4.0.1',
        'semantic-release': '^18.0.0',
        'ts-jest': '^27.0.7',
        tsm: '^2.1.4',
        typescript: '^4.4.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'e76249b9a92c7a9218a29e062ec1d6cb9743045d',
      _id: '@nrsk/sigma@1.3.0',
      _nodeVersion: '16.13.0',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-wbRP3NHCiB5Sp+CxB00UA6X3lq+FJYjMLR71+aYBKXcOq20S8EgM/gsR6f/TpOiMwqiLRpS678yPeu8pUfdPGA==',
        shasum: 'aa976cb8fbce1fde200a09b817743de3eee6a353',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.3.0.tgz',
        fileCount: 19,
        unpackedSize: 64799,
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJho+8pCRA9TVsSAnZWagAAiaIP/R453t8mdqkLLYEW8UQq\nMAE8qDK2GdoK6sRjKUvLQuJ8voSsr7jw2KqbO9LSAHq/NBZ86jIpqf2zY3KY\n0Pen0BUCMQiJMdl6Ywzavne6z1c3YMHYkbBnkJxUEllkLCK0qzbYM9G8NjGF\nhVQeEK/n0DWLX14gR/axbvgybZY4JO3UeRxB30tYEPeUCzE7Qkgzd7iPoUCT\nVlOHZR6vU+ozvpJJlsxH07q14vQKwAIvrbcNcqsCInfo7LICfUs0QNnIre0u\nB9Gdc6w0cVkxBXc1LDoV0RKDiFJemH3/7ILb8jPUfv5tUb4xxvNep6Hmjvq1\nY1Y6Jjqu94UrDJqOSW9iN1Aoc1EfTsuYHtl2wOumEA25viir15UpMXL9Gk6m\nxv8u/9SS1laem688D+NHeLd3YxokamOItRWstNc4/pg4abgCJlDUugBLUIYw\nJ6e+iiVlgy8y7yul4HrZfP6fr5xheBm2yLxMFiVgDBZgSDHMz65EqFq/FqtD\nUTzwSsB7oQlwleiPWZnI7ROlh9UimmzT9b+k3QTIFh9PLYtyBqxX1vTC7bKX\nLZXam/GdoLtXu0l82vlYkkCaEdjtOml6gXk8NJUZcVQ+Xm66h66hoJb35upD\nnpb+wiSkwmOKRysVKan9r8tym7wTuTLF6fk0LPXnkdF3uhz/yhi3titiPWXt\nNm4V\r\n=8UQg\r\n-----END PGP SIGNATURE-----\r\n',
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEQCIESiTQ8oKmYq17lwZxeRUpwLAmZeaKojdx5tBuSARqchAiBDsettRJmlmeDQXpxDeg21ytCcd4PPM1iFfOvj98dmZA=='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.3.0_1638133545073_0.07628272054366847'
      },
      _hasShrinkwrap: false
    },
    '1.4.0': {
      name: '@nrsk/sigma',
      version: '1.4.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^14.1.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.0.2',
        '@typescript-eslint/eslint-plugin': '^5.3.1',
        '@typescript-eslint/parser': '^5.3.1',
        eslint: '^8.2.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.3.1',
        'lint-staged': '^11.2.6',
        prettier: '^2.4.1',
        rimraf: '^3.0.2',
        rollup: '^2.60.0',
        'rollup-plugin-dts': '^4.0.1',
        'semantic-release': '^18.0.0',
        'ts-jest': '^27.0.7',
        tsm: '^2.1.4',
        typescript: '^4.4.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '6757764516b5fc7af50bbdf762d74548eade1728',
      _id: '@nrsk/sigma@1.4.0',
      _nodeVersion: '16.13.0',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-MHR2XuKCk1eU15cC47WaBZ/H1fIMphrByjobkTAsOzjOQgw9OZPfX0xaHk49L423G8ZxeoS7BwjeDYTBWBSLPw==',
        shasum: 'bd79b278d5db42c97116eac8ea0f279e7f71ae48',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.4.0.tgz',
        fileCount: 19,
        unpackedSize: 67291,
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJhqC7yCRA9TVsSAnZWagAAd/4P/jojRx5kc6F8R1ElcUGv\nfUhGaVgNQrWXpQlgGgAa7Z5+3aZvhiXtpWid2y+skbbgNDDElpA/z2j8Qqwj\nxDeg0JxhdF2aOpAB3H6CAD644dHBzq42GonhohQ84jw5NWxOo9Mxr19vLULM\nTFzJPid2UQGHJAmgzGopI2EHVqWADk4IK2f6Q+c+UiPQZiXetLe722Zkf4F2\nf364G6q5iYgCNp5mdr/KD4mTWDpaNVq6dBLsm6MxNcCPGpe7Qsa6BSAMHjt4\nNtJUFAkgHZgkgGNpmbG0Gn4sc2rJ90wxVKO0bFPKFbut0ZJ/SUzpJFhuKPTq\nWkzkmsk1kdCH+3IEe8BmPrvhhJJiy3FEQytp43kMpXPd+yTiTpDWFg9ThtK/\nbIJuzJzdO9yDnstbCffWFZRw+jTn17njE3Wf1XJGL2WpKNmi+L/UNC/VJD1K\nxL5A47a3OuGVGD6T55G4ClM25BbjZM94EoXshoV94rUZPnqXdnwCkYyoEp4V\no7NcMd8AcPfAs+bWLaZoz1nt+ZDSZnIDGhIWSZCalvaelkM+Uf3rE9abQ9xe\n6JlWMmhXDD6KhMhae6tFJchNVMq6P8UlQlZv/P2i4Emx6NGPRJ2IqSJjeJT4\n1b9zNNmnybrZq4v499mmAzVjXEPAQ8QWlNurdITPUidKzTY+v8Uoy6V0ZgOe\nWA3Y\r\n=9U6B\r\n-----END PGP SIGNATURE-----\r\n',
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQCcbMYPbfTmzvCw7nUfgBn5s1mDZZ+xqzjMx5etFXUK9AIgbhlhqrr3bxcs7WJ3mbVR4c1ZDPXUemQPLtw9C0qlwU0='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.4.0_1638412018645_0.44662674923403145'
      },
      _hasShrinkwrap: false
    },
    '1.4.1': {
      name: '@nrsk/sigma',
      version: '1.4.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.0.1',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.4.0',
        '@typescript-eslint/eslint-plugin': '^5.8.1',
        '@typescript-eslint/parser': '^5.8.1',
        eslint: '^8.6.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.4.5',
        'lint-staged': '^12.1.4',
        prettier: '^2.5.1',
        rimraf: '^3.0.2',
        rollup: '^2.62.0',
        'rollup-plugin-dts': '^4.1.0',
        'semantic-release': '^18.0.1',
        'ts-jest': '^27.1.2',
        tsm: '^2.2.1',
        typescript: '^4.5.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '4c431ec83750db6b657aa7462c526efb10405825',
      _id: '@nrsk/sigma@1.4.1',
      _nodeVersion: '16.13.1',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-vMsYiwd1qvolxUOtz8Q3rHQHV3IdjD6JXmiKUC+Hy5cFXgL+NrHvxvo9BR+HhMYN8UhG9GMB23jIGqLKfPLGfQ==',
        shasum: '76cac6af8ad65193a7889c934c5b47997e1e5bba',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.4.1.tgz',
        fileCount: 19,
        unpackedSize: 67560,
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJh0VsNCRA9TVsSAnZWagAAZuMP/2mUfKtmmQDRHiGwEE/y\nJiMBq6EnXihg8oR1N7GVixudd6ou4uV9Uyqg94vZjtTlVRoGuLGLO8V4V/ON\nKC4rPsxwYbFP6KkmYVyrQCNU3Psi1NbcwKepvXMsThWz4DAwcnJO3dXZspvc\n7MYeUvYZoRVRBjfmTeiXBOkv59poiuOGkHzr7LxfGuFN19l4KMbOiOvhL6tI\n3XNbsu95XkAOgSPoQRbY9EkvNLQZy97S+JwPF7Q584GUn8LRtBug4M3DbMps\nlV8/hdfekJRBv0Q/aHUqzDhS2FnUmYU1LbSwcohmDQkkyfOEXojD4GNbPQYB\nm1beRuibfLQXnfT2cJk8IfojrNVJYqtiMeL9L9jzjZEVrJup3DT4KAx78g76\nwMDJqIrbnqrwaJCkEpZZcVtcjFNYGm8BaJ6Za37WFS82a4YMYWsfBAmGfrr9\nSJpvRopb/bmW1flcZhw40KTzwIPBQ1QOGRNOTtI4VZfzGSDLzZgUPdMaU+nm\n+rxYRiZSv3U73Anlv9uVB2mN2z/b/p4tkNYetx4P6tfezRvhA9lpDkUfno+7\na8rqz6RJDJipTzIidyTew9jHTdrLLgLQmedfAbqJCH+e1uzhqAQLMBxIprkU\nYKNJfN1XWi6kLzrKCx4kEG5xcvS/rmMfMRUUJ4n2L8V5StBrD1XGN2p88kbv\n9ZUs\r\n=rup/\r\n-----END PGP SIGNATURE-----\r\n',
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIGay89I1DSH6cMsgmPoX0G2xcHWfamUGoPxN6X8NQaqPAiEAl/2UVWV1F79HP57tV7E0Bpe9rmbaBglbpeBNag4uIBU='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.4.1_1641110284847_0.1185839981614345'
      },
      _hasShrinkwrap: false
    },
    '1.4.2': {
      name: '@nrsk/sigma',
      version: '1.4.2',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.0.1',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.4.0',
        '@typescript-eslint/eslint-plugin': '^5.8.1',
        '@typescript-eslint/parser': '^5.8.1',
        eslint: '^8.6.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.4.5',
        'lint-staged': '^12.1.4',
        prettier: '^2.5.1',
        rimraf: '^3.0.2',
        rollup: '^2.62.0',
        'rollup-plugin-dts': '^4.1.0',
        'semantic-release': '^18.0.1',
        'ts-jest': '^27.1.2',
        tsm: '^2.2.1',
        typescript: '^4.5.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '9f7ea99ef61c62e4ff070f4edf17dbbeb9011027',
      _id: '@nrsk/sigma@1.4.2',
      _nodeVersion: '16.13.1',
      _npmVersion: '7.24.1',
      dist: {
        integrity:
          'sha512-IbK8cTYTaVeI3wjXwnuwnGJT2OeZTaZRWPLHynTE5gM4fH/73J1LhJ7lKHVGx2wcGQUc2XXVWVuO50NpaI4N7Q==',
        shasum: '87ffd55475e683c3661a429eedfc9697f68b5ba1',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-1.4.2.tgz',
        fileCount: 19,
        unpackedSize: 66268,
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJh3uNmCRA9TVsSAnZWagAAvRkQAIwa9p9CTiEzm8PQZhqn\n/eqgQkJK3Y60lvWy1CvOOwwpQyeI/SeHQ+XEY2FkLcVPYxRM+h5QUlgS9thn\noU1jQBNW31EbRtRKL76Z+hVJ7FcE/S4+GWuGIBlzK13ObCsJTi/InliN0tns\nlK/VkqnNSs0xGCD19uPps2Xn7uuSVbyxEc1ujRM3XVrPeO+yR1DO46Qp/lLx\ncjwL4HLyjof5yqMbFuI9QPuj93jpUNmVZr5kL9sK7aJM2EJYDxlWU66kBrfA\nu2ejuTogSIk1wbPseHbEX6WtJPbQHwO9EmSh1tMzAs0c3qlNccq5HX0UjV1P\nbOE2GdKOlanbMu3NxVMoIZx/La1vNAN60SU3TOCqS67QWVRJTnENfqjkMvmS\nhHpQhh6d6ipZEzZMCZSkERmoAyE3N+J5agucGOKvgzzFcoyKPgZKyYqUz5f7\nKuT0UBPwjbqpaL60uKXFOpMuCt/SC7y0tpHGpy9WYyAnN1/E7CdX+zhccwtu\nQJl03E+8+ujeGooSfDrst1Ay8nxa6xffgYjnZotebNr9Wjjy0VwPzyJlu4Bi\nk/NkTNzzRZOEaCMJqEA38V/8inAzV5mcGyydU1IlZlNYI6HLzJGtVBkFYS8N\nWcbXx6Dw5hPn8l+4IEM4QENcLznqlnkvkJuNJ1BVpge1lyLtHVZtL5x8gPh8\ny8t7\r\n=iwvP\r\n-----END PGP SIGNATURE-----\r\n',
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIDAREeyv+CDOTa3Abw+j4ILUpO5EZgn9yYR+sIHTlL0ZAiEAnYtneCY07ZMChHBAyVNezCsIFUuz2+lTj/j1xq4LAOM='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_1.4.2_1641997158042_0.6281220432285646'
      },
      _hasShrinkwrap: false
    },
    '2.0.0': {
      name: '@nrsk/sigma',
      version: '2.0.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.0.1',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.4.0',
        '@typescript-eslint/eslint-plugin': '^5.10.0',
        '@typescript-eslint/parser': '^5.10.0',
        eslint: '^8.7.0',
        'eslint-config-prettier': '^8.3.0',
        husky: '^7.0.4',
        jest: '^27.4.7',
        'lint-staged': '^12.2.2',
        prettier: '^2.5.1',
        rimraf: '^3.0.2',
        rollup: '^2.66.0',
        'rollup-plugin-dts': '^4.1.0',
        'semantic-release': '^19.0.2',
        'ts-jest': '^27.1.3',
        tsm: '^2.2.1',
        typescript: '^4.5.5'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '602cd2355651d10ce93d4c579433428e28bc35c6',
      _id: '@nrsk/sigma@2.0.0',
      _nodeVersion: '16.13.2',
      _npmVersion: '8.3.2',
      dist: {
        integrity:
          'sha512-KC8agPrIBwmCH7Ws63GUOwwaXWGMJVoyXzazdd+4BmEvJJ8SU6bARgnvasErwn2aMztqYrnAYQQHydeUMI81Yw==',
        shasum: 'b511803a992068804ffdf9f6b502d12f6a4e44b6',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.0.0.tgz',
        fileCount: 19,
        unpackedSize: 105632,
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJh7PU5CRA9TVsSAnZWagAAxBEP/Rkky7B17Hg8wxC/YQrK\naWiLuKnaaVqXqFKBj9w+sWknINkr4g1LCq8mSMay0UsGLa4xNC3t4W/4R3Ys\nfgxvbq3TwXx9uJHONW8tmKERxtwvflK8v2pwgPaeTbcID7G0/vJMDChTBG7I\n3qZRvZo1JjKiNDoGTV5lg3uEADsByPkXQtCoJqtYWRY1T8EZ9rnmaRyMdq0K\nzXUFaetmhcwtHl8PHo9qekyC7dNALjbOzHlTe6AzNtzVLsFZsSXMAEd7Ul2S\nX0K4HnyNjxtc+xpfmhSOBT7zz++8xJp2jRgsGJey/xZZxU8aS1Wuzo2SFzcy\nGaJUvNbBtYjjjcv9zV25rthVBErsfpTIPn5lg2jSjgnQmZlD2S9t6IPD6XaR\nrkPScMfGk0vc/jtU/AuiN7GhrHzMV0ccNL9A3Qmsr+o/wM4zwaflzWG4Qcmo\nWurtxPQ6rRCDb/ddnwRj5cgjTyKUZAuzkcEMdcxWJmSg1cY++jWhK+m+pwsC\nExCggmt1u3YLi1q4m0z872Xm4BZv5NmX6tn5JN4cjzxuC330iZs4zxLOP1/O\nfHUzywBPue0EphRIgwwA1abF429w5UyNgEVWusW11Ice7RpY6skQ8vuYarxc\ny+gdqMDpNV+rV4koQjB0IZeYBafwMMgmMdPEV9vTtetHFgQRQ5J409ZbUza7\n9Ho6\r\n=Y2Xh\r\n-----END PGP SIGNATURE-----\r\n',
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIB17nV9wxi15CRdpq74g5ei5/BlELMZW42zffBPOI/PpAiEA2qKDGozkDHe4AJw8aGqZf6+5cRN3e07gC7vqYBV+5h8='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.0.0_1642919224985_0.2559107193859891'
      },
      _hasShrinkwrap: false
    },
    '2.0.1': {
      name: '@nrsk/sigma',
      version: '2.0.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.2.4',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.5.0',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.14.0',
        'eslint-config-prettier': '^8.5.0',
        husky: '^7.0.4',
        jest: '^27.5.1',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.72.0',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        'ts-jest': '^27.1.4',
        tsm: '^2.2.1',
        typescript: '^4.6.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'bc93e320e720068bd6a5c7d8d5e4833b8c2e70a3',
      _id: '@nrsk/sigma@2.0.1',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.3.2',
      dist: {
        integrity:
          'sha512-OLpbEz6Eg6snKrxfgLjlTMsBrRH8Pq5V41V9OmRHHtruo7FfnC8UD2d2+sncMQUZpEt9fKFEB0xIdxLLSEb6/w==',
        shasum: 'ed51688495f7786ed8a3ba852931ed5dcb20a85e',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.0.1.tgz',
        fileCount: 19,
        unpackedSize: 116257,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQCDP/231wfH3Ir0F++tlJ2LbHIUaSy5EagZJVdRU+/n/QIhAPZ3cDDR/FNO7eH4XVzhCi5IXfDI7yi+nsHzvZH2NF7s'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJifjPSACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmq7KRAAidZue9Zqm9CzAuj1jfQecTqEcsJYwF7ELTs/lQAcF1K7XpPX\r\n3MRLOcVkgk+Y8izyXQrkPInUkdSJgKcE8zd/dQtQ3G+64JcJ9dQtSCMcQ/Df\r\ngHl3Tp0gXyB/E3lpufHfBKT9a5QuGh67VH+chqCSTvQ85RyxUon6GG949pxv\r\nSmYCt5tLipYAER98lhEiBVpd1KR7b9VJuRflFWDUd9OG5ncPcSxCXUHsuusD\r\nvqzJpmnq5DBuPshmHVcHLt4HfW6+KREAMEZmFFUmrI+Id5ERM8+PAo5+T2/8\r\no4AUrazu7j+XL8PzTeAcD9Yi+5fOkAn8htrNQMjWyaOWnXyz1NtRbP+o7r/l\r\nr6QvbyAASiH1mfE5/vDn/3ELc7S8CTNODJbWk8xYlGr8ppHKWEOA+nIKjU9R\r\nBYOw+IH/JrKnbe/+MTDlUybk6eqZPq7isPzQ8kM8Pf8E+3WaFtqpkCVxR3c4\r\nuywfw0J2eBXPDn/cxoH2NNUP9K/MA4KKPNszD0DKuPHtYmKySt0LgcnjjvGG\r\ne9OUueOZZmLnPn/2ACRYA60rTixh4elDujLyHEkZ3YBO8vT4zWU++A+JoHZ1\r\nb37rM4Dm4ZREXXnaKospbFFdYkYnv6phShGQvnQHZAMbVKwb4YAt+s+QX0Hg\r\nMCK87cALAMBQ8r94Ud+vGx6AXPhp9jYhb+s=\r\n=l+3w\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.0.1_1652437970165_0.8358001616952979'
      },
      _hasShrinkwrap: false
    },
    '2.0.2': {
      name: '@nrsk/sigma',
      version: '2.0.2',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.2.4',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.5.0',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.14.0',
        'eslint-config-prettier': '^8.5.0',
        husky: '^7.0.4',
        jest: '^27.5.1',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.72.0',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        'ts-jest': '^27.1.4',
        tsm: '^2.2.1',
        typescript: '^4.6.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'bc19fdb5fdc07b804eceec35b1d970696a53dd2b',
      _id: '@nrsk/sigma@2.0.2',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.3.2',
      dist: {
        integrity:
          'sha512-Zx5RruNXmCop8L4YLhgCpD5dAqQ9oNCJYrwKcimTbCk7riejg4oIs9dLCCJUoYgcpkNja3n1Qt7XWyCvWN1XNg==',
        shasum: '88f980f888ee7b57800aaf007703db3d0e738fc6',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.0.2.tgz',
        fileCount: 19,
        unpackedSize: 116489,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQDYsgdcvWHYX0jppyptZ9yYci3Wqms0BxyK0BNMQw9qrAIhAMerBLoiLFOWC4zbmrw37UDPOUPzNc9wkCpC0tZWAlh+'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJif024ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmoiiBAApH4ZD/lLkPzWqQDiPTabmZk54lySEoJiPifPfAD4m9r0Xs7L\r\nzqNOBOSbpyZU9hn+pnejkIVTSdYkJijD0Ghv9vIdWLjCSFj2WK0Ma4plAV9H\r\n6tJSN0lJK4qJG/CWrvVrcDCR7A1UAwdrIgcDmJqxmNKtU2yr09hkTafgqePv\r\ntJ4xEZZqe2Emzewt72II0oqe0jVZqbJpwYkLDQV3Ikc0vq5Ar4g22t5RBWjl\r\nvCnc3WZudrFUSi8rgAd7ItnOdWOr3M0JC/j+fFVNhdF19Kioyem6SWtNggaB\r\nmmY0PK1WlITqy12QyPu2ojEVbHBLMLon34SABpkGX+blcfcrnnQYyo0fHpT/\r\nYZObPLd38ZS4mUZ8XSd9b3rjflMSdnkor9KpydahzoJ71ljArLsZ5kkR/nC6\r\nK0PfbGJnXB7U+fcyUx7ElcLKpZEKoFKqBKcLkf4ntgjzygU2jHcpZJwfdTYE\r\ng5P5g6L2bNy3Kzp0B1CN8tbzHT4uzyn55156d0kD7cxO/EiIQ9UIbZ0wqfQU\r\nIVmxI6m2S//vmX7uqQJH4I1X+f6V2KiyzlIB/R2lltk+CW65ZkjLPqSSXwiY\r\n5a9EHWsobzspNizQMebDmtrac2iQQsrMPYVhPYZNFkqn0NejLclP+2OgMOIA\r\nIW63NfSXQAzqRJFyrEmf9KBDXJ8Rj/tQRYc=\r\n=e6HP\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.0.2_1652510136593_0.3144303206994392'
      },
      _hasShrinkwrap: false
    },
    '2.1.0': {
      name: '@nrsk/sigma',
      version: '2.1.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.2.4',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.5.0',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.14.0',
        'eslint-config-prettier': '^8.5.0',
        husky: '^7.0.4',
        jest: '^27.5.1',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.72.0',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        'ts-jest': '^27.1.4',
        tsm: '^2.2.1',
        typescript: '^4.6.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '7c0e216d2e573c8983504e13c33579d8cba68583',
      _id: '@nrsk/sigma@2.1.0',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.3.2',
      dist: {
        integrity:
          'sha512-HEoiIZHFzCHt/iahVzVZa+Yx/MIfuokmuKdJEQPAXf2Vwtw9Xefb1/Sh5wlBkQ5QJnNJqEJYA9OPI/rMqoygbA==',
        shasum: '10c4bac20fbdddbba095b7a0446ec0998a957c6e',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.1.0.tgz',
        fileCount: 19,
        unpackedSize: 120853,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIGQL6YyH99OFurOt9Aypn94PMvU2dxLfpuHjLsRLUCr9AiEA2HUsFZNJE2EPBNSge2ZWVBhG5BtHyRsI7lKwULf+kAc='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJif54XACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmqOsg//WJB1P14K9CBVbrk/xFb3Wa3m7vxypr97TCzwheuhQ6BfBP9W\r\nqCXnUfEneToNeSTCInr4Ib2Thdu9gybgkIrLGf+ieLA3c+XUWDPF91UcbJDp\r\nMNmV9O/lgckrGr2WiehXUE+iGnTedx7y1A5eaKeYjyHcTkENgzna7wV0x9Aa\r\nzHpT8IiNrz5/AnjamaLTic4OmJAmuZmw4950EHXU5agcevdeUwSwuhs345gc\r\nXcroDDr5B0VUMTPOjOGfBAMRnP/IYZt9O7dRt/ZIcuVRv8oAGJL1cC7qm81W\r\n/ekHkFRRbBUdqTWu1keAxPfHmE2YUJmyfbS9RfZJZlRhbYgqbpnkmJ6T/bJg\r\nynNaFGIft1L53RPCp23j1IhrGfD4Gjzf7oqnV7I0ntWJbYYgVbIEOrrDWbFM\r\nhcFLtMRSKLXYFhxx8oVZ6PZKGMTmbJihQ8v/mknrgrgQ0nYf10lsQFFxQ42X\r\nvXw+mDEbkCgCd64p6HqQ6SUgj3z7M23y1Ynah0C3S8gELFPf1p04Kkx5wEFh\r\npbO6z9EoeJ13t557DqOoXkSVyfcrqQEev4SBCsXcrwS5+kM5jvwpE5jfJVtQ\r\nQF3cRJuP4HiRhg1GKdfJCc3POmaiKXx0SARSQjA10gL7KId07WkVh0voGW5J\r\nLshiBfEDENJhsb6yDLvJrVCIF2cicf2mm2k=\r\n=ZlZe\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.1.0_1652530711449_0.9847879715462391'
      },
      _hasShrinkwrap: false
    },
    '2.1.1': {
      name: '@nrsk/sigma',
      version: '2.1.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^16.2.4',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.5.0',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.14.0',
        'eslint-config-prettier': '^8.5.0',
        husky: '^7.0.4',
        jest: '^27.5.1',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.72.0',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        'ts-jest': '^27.1.4',
        tsm: '^2.2.1',
        typescript: '^4.6.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'a06089bfac52349271b9a657f1682d419abca561',
      _id: '@nrsk/sigma@2.1.1',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.3.2',
      dist: {
        integrity:
          'sha512-56e6GvjpBMY824ae0h6DjnASeINXDi8iQKfbPMwYPINj0mh4o+NJTMPJ7mcZm+QVIENYZwtzwF41LyBshdFsgQ==',
        shasum: '4c56c6cbb6529b15629d06f2b2f54dd93732f6ac',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.1.1.tgz',
        fileCount: 19,
        unpackedSize: 121246,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQC33jQAWyUQZn2+6rI/bONk3vvZFVAnuWVhHv7LlgWn5gIgRoct3B8FAqDZq2jBp/UveOjZWysMrRJ8WQezuou3k1s='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJif6QXACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmqGpQ/9FEBeNhumsnnpQ/HIp7VLex38wGbW9rKfKmnaoh3o8BXFSGeO\r\n3XRxAuoAx9AFKu4SQuBWLio7XWPgUELY3NYJRZ+0AwzUyXSp93KZTkKhlpOV\r\naYAvFmCFfdCjIFIp77j+NEjOAwBrqvd4oHI5K6s0IzOnQTci3+5lIZMnxR7B\r\ncOcaS8A0Id4x0WHcE0EzGKtaaSod0DCq10JO37fDCXU37XyUtjR0n5JGK/vl\r\n4EeAaHIyJegMS9a3/jRyodJyBN8jB1R3+e9QwR4LCcyrBgzx1KTfsrM3+p63\r\nijn/dfN/lnWOUbFLKzlJBhymXPn3iIBcKkXJRYCgolXr19TznGyOc46aLDN/\r\nngSbQqs7TDcCFDgnF3jqhAhcuh1jVMbEWJcdXQrUzn10upAyPLV2DVrp0O/K\r\nP9+jUOkQiwDSOVzcBUFSR1j2fs8SEOf9MqyO46ZuMQNwvAwVLnYcwleVfCSW\r\nnH6JppJQEAAlVLW/tIzW3w3kYE1XkkquTXRHC54KuZNlHtCZ+vka+SAXVoHL\r\n9aokB9q87vdXB8T3jJ8XGMnERbW5U55B7M2ZPHX0L6okEAHqAt53FZWfxPaR\r\nh+Q/ZLB+rlIbEzJqb/l5OKV99cfIkY2/RdFxfoG25W+G4YxeGWU8qrf78Sr7\r\nugr+DocNYdOVRSxEcAwrWFvF/te6FGkSbNE=\r\n=AI/U\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.1.1_1652532247381_0.649166097311366'
      },
      _hasShrinkwrap: false
    },
    '2.1.2': {
      name: '@nrsk/sigma',
      version: '2.1.2',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.5.0',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        husky: '^8.0.1',
        jest: '^28.1.0',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        'ts-jest': '^28.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '19e07b1da6bd77f83e574c201570da6ce46aaa9c',
      _id: '@nrsk/sigma@2.1.2',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-Sv4z5+yfD/5GU2p5GyM9YRagMe6cbsIXcx9bO0AMLdyVL9sbumHMweL+oXRCq/I/+nMTJx0tR9mrPu485rAz0w==',
        shasum: '0795747e0ec05e10b8a3815e1ce0f8b4c3d9a8a1',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.1.2.tgz',
        fileCount: 19,
        unpackedSize: 127298,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQCVkdD1qqqc5s9p8bbyiineGZkx9paarHN7b5+olDkgmwIhAL15UU1+JGsjL2ZfSXFxCWT/2NMGBCYYdbXouTa5ewP/'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJile6TACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmrj/RAAkCu+lBAX+CLY9m+Osiy6H3beIWNQBBACE+xWORCwu4E47lhD\r\npXVrvqA8yG/zIDCvubLLF1e5d77QNbJebV7mn6SbRePcT28mL0aCNNfxeMCP\r\naVpQx1dofTsHOkkmTv/glpMznnyYiQx6naXpYTC00diUeqoi5Ua60zhsvMJx\r\nb8ZieYYww2pRkUs29pJMPApjLNFy50GmGuBD72ES0iNqhhD+MUEc328XyfiN\r\nJHDBUQ+dTpuMOVRAhPYSmeKY+aYOn6VrrIwoyiFT5KGmHO/7ablT6w6fWl+X\r\n5UIoSvtbOxWPd3fPw2YvWvEBG7gr3f+0MMhcYg+/WrNKIYxAwUx9DpmOajxK\r\n1MzFgBmef4gKWTfvNYckjrWAjX9Gkp8xycBRC0N21afvSFSagd54f1gpv2n5\r\nkB4Wtqom4DCGkp4YddeWvmMKjhV2OLnhfHnx9fPPCynB03YGeqP6Vxv4CRvJ\r\nGPK5Qnp8OiJpC0j5VWjNqYRA5NpEddfUWvtYVBtgbTUpk7WF42l9DDrXSkgO\r\nfsiU4Lq9OWPOEFhFyL78dMk4WY+eEYucvEAMjcF7hLQ9nZ9v9jgRx5yf0bhe\r\n7SesYpofKKU2ldbcxSpWfaHM/BhIiYxZr4r4WMIo6MyHoMAp0eEYwMrGvCYf\r\ncujniukZuD6dJDStfQO4CiT5p1DajdYiRyI=\r\n=fSg1\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.1.2_1653993107366_0.25891946246009145'
      },
      _hasShrinkwrap: false
    },
    '2.1.3': {
      name: '@nrsk/sigma',
      version: '2.1.3',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'jest',
        'test:coverage': 'jest --coverage --run-in-band',
        'test:watch': 'jest --watch --max-workers=50%'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/jest': '^27.5.0',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        husky: '^8.0.1',
        jest: '^28.1.0',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        'ts-jest': '^28.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'f60a72c85a72624471f102b23027b4a506af7430',
      _id: '@nrsk/sigma@2.1.3',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-u0dP3onC/8/WchYbv7Vucg0WrACdduV65OS5cbpGI/cAokBlhqyf9aDpwbow+agDmweQB+BCmzRU38sBKoggzg==',
        shasum: '153c023613d06a5d20867784870bb6ae7b50b558',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.1.3.tgz',
        fileCount: 19,
        unpackedSize: 129327,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQDxf2sk/bhxSz4kv6XYA9v5LjcQpF+vaZebzBRi+YwobwIhANyo//uyWmCprclPzTy5INmk2WB9zNoehT4JkLa7AUlj'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJilffqACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmp2YQ//WBOjl6fxx74qdE7fqfVl2DnERKkEsMHyJk95JUNLsHxyatIx\r\nsg5f536ztmNf0EKclZcfPJjbnPtg+IpXyERHX10Eye2/SpSbiqHwuOEitCb8\r\nwNwaQynaq96wzCW6Dzh5/GFEzw136wuMfL9l/6fMV4PxOhpCgIDIrm7B1qm/\r\nCF7kGVuSx6Xinm0pKSmBm04ppJBAq8PVLDgdUJ1VRc3ac2w6Swx7MG3b55z1\r\nCVCx/eQCCk919noWR8gEw5k0YgiZcy7yf6M+fCU/YPN8p1GWhBi66Ewt648K\r\nV/eX4QWMyXdhdN7xW5RJejNAs0aDQ8tnfazIilvqHfcBGsdh6kSH1lGsGlsy\r\n8zBb6b/17sQ+QkYa2ow8HmEta/n/qzQOBHiuOpT57c8O9i5E6jw5vDf0OoaY\r\nMbSnAn8JNyOp1AxIPqc9nxEKXPXQbXgsoHQm79t2X6bPztz9UiIZByvrV8PT\r\nYyGwj2wpfJZ1frPZ70U3ySjJAF8gUhRONiloJFl5Y8DgrqY2Y8ZezLn24OJI\r\nka63UetrCHCfN0CQsMCFgC3L9Y3TVDyGHwKiF/WIkeWluREDLO4/xxC7uI3p\r\nVKJ1jQ6NPafse92zT4xDkWiiYlPkqCHWny275rVBP/JG69JnQ1cVYX7n3gPv\r\nZLtdmIvHPqNKNcLwRhGLvk/gMl8sPiKT6pY=\r\n=RePI\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.1.3_1653995498679_0.9248829171587165'
      },
      _hasShrinkwrap: false
    },
    '2.2.0': {
      name: '@nrsk/sigma',
      version: '2.2.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'echo husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '302e0be205f343883529cfacc7dc318164721664',
      _id: '@nrsk/sigma@2.2.0',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-wX8+aPi16J96roJu3ITMDNQ7mqKDAYS3YO3lLHywOZ+XrZL0IWkNmz6JOPy3I40jIwUBqA/0JVlQHzcd7o7tbw==',
        shasum: '827a757cbaa8e795ea7aa5eca3d379f4556e2442',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.2.0.tgz',
        fileCount: 19,
        unpackedSize: 130062,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQDwIwm9g/klz+HQkUB2NRPA0QI6xDthb3CbxZt5ljwdpgIhAIsQHuSgut5a5ig/6ZlE1FPgTNmO2nyqMj9s/dt+PGeV'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJiljpfACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmq6XQ/9G2nRn5UyVgPkX8FLzxs/SQvywQG/ojGssBOD+1pQcyGXo+0C\r\ns+QAcyoFRVVFZQi/5tf5KBpR9n5kI4HOjtWV1oainiY6J8I+sjRKeoM4c6DK\r\n9e3rF1/MNgi2bfmuGAX1Ac0tjtC9JYguofPLJeuKJ5nhl+nIJBGZZp8pVm//\r\nVL9hIdeZIpfSCIGxRMpw7PUkHsmIQaDI+pPA8pLJkY4cpZCH6tfvwW1BE3iK\r\npwzBnb5BxWAWga/lyi0u/Mt1vgS01S/Zsqq4qO071WBXKlxXf3DvYvhvp39R\r\nehU7C5ExCIbR7+C/5wFXo3++/0OELVDD7+79IQKbR1naW1M5lIGjdi3DIqkE\r\nqUfAA0CkNadT7mJpWBwU++ANYdYgsP/wmi026KuWKmmyKMY2EIUqjoFV00R4\r\nys2aevr4vMKoNkR9IRothonhiGvpxt6qh1I39ZJRE6OOlD0CJJwYF0tYv4Oh\r\nZAQbrek20sW6FvZ5oNQw457gCnk9lTlT/VHb9xQ7LStLLNepy9KiIlV60jtk\r\nEvC5wg8t6iq4c/AK8TlgwEccthy/gHP1ryDeGX8w84qga70P96NhPAhbQyF7\r\nBB6IHB7x4PpSIiKSIUqrVGwCgfrwY1RGxqzbiwxS0dZyuChHx0nVrHP+gPQG\r\nAAMU7BKVgUlqgd3zK+yAGlDygc9eRz9Fa2M=\r\n=d+Cu\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.2.0_1654012511596_0.7119724655436577'
      },
      _hasShrinkwrap: false
    },
    '2.3.0': {
      name: '@nrsk/sigma',
      version: '2.3.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: 'f5b535efae00a007ee009c4236bfa07aaa5dec2b',
      _id: '@nrsk/sigma@2.3.0',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-rsYv/HrUBjTeHZ2URCge7WJcAU4hswmAJ9iuijVimJtvKCatrRhza/nkOftzUU1ZSCSvq26sZxKQHownQKTXvg==',
        shasum: 'b2378744556cd337dced213ddf7822a0d444b57a',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.3.0.tgz',
        fileCount: 19,
        unpackedSize: 135476,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQDe/YF3DM0xWtomSA4j+5aAxnSMXUs7+9J/kIVdm34R/AIgP19Mp70oAV3GShu54IG55caQrIuR/qreBo9cVRNK1OI='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJil2i0ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmqg5w//eaWpNF1yEoZuNggkoHKrOXLGA7SWpyNBHO8xVHE+jARiESc6\r\ngm++dFHL07CuMvE1xYWn6qrHbiQh2idFZM/zzcAhorP46N/K4y97DJ6GyUbj\r\nOIJgPiNoMoJP5XoIyDJkXPrw1CwvNKxVcN+9eAm9tG7C4vj/2PMPVv9UfWHw\r\nyM2JwbZv5lAjUV9GiOnebiXj9Mb7j4R7Ag7+ptYfusD8O2hj3xelvp92P7dp\r\nkfbkPOu6SSRF2IFE89txFr/l18ka6KSnH+Y8Hv+L2kvmWC6XhhI/nGm7oAld\r\nPkAXp5U4K9UZ/dRdmTcW/cn+d9b5Fith0muilXg7+m9T1V+Y17iLTwRb3oFW\r\n6nfAkp2jLGCNXZpe5KR3OK33YcJ0DlFoxlazUVq8EpZGFlAguP998SwdSJVi\r\nQKPWh67QUAArFiFwLIciG9+h60qaJ3IY8Vl+1d7otXXlm/x+7jpPtATTCPf4\r\noz7bWR130yBWsDoZi3ZhDtxrm3D1iufJoFGftQ5pwY412pn+XcRiDPRiZfNk\r\nuKIesLHfLYdPbZACKglTYzRkqMJRzIpsOleSTxq1aHHAcAMi6d2M0Eh9fXYZ\r\nuWCpMAKQgD6QVTjSWP5RneWNQVfCFHIWLByqd9OftLlMQ1CFR21WVtrnVYT5\r\nF9Dg7mehgQdtk4CxR81x3Nz99SjlxbW5J0o=\r\n=0c8y\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.3.0_1654089908165_0.24510002970043288'
      },
      _hasShrinkwrap: false
    },
    '2.3.1': {
      name: '@nrsk/sigma',
      version: '2.3.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '0e660b83e8b5a92e5d84be9e0ba5d21b00eeb22c',
      _id: '@nrsk/sigma@2.3.1',
      _nodeVersion: '16.15.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-p2g4fgtkV8x9jYzg7uOqkGKqx8D5X1awkdIbuEXIqLV2zLo6Mr50Prth27QQGV+Bn3H2CVdApMakeU3x6aXh9A==',
        shasum: 'bdf6ab60af2393f2830ec258280efb6fea26bc35',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.3.1.tgz',
        fileCount: 19,
        unpackedSize: 137987,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQClAh7Xf2E5Rj1rrdPJMHZtLdHPN1fq250S+fO+8SqacwIhAP4VFVrTGSDgae0ASWm3F5C18yGlhDZ0cGWIaFV3LNtI'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJil5fsACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmrNjg/+Kmbkbzia2kPm+RIMljXUYOEtQtJXQvjZYgOFrD9zDU9/WXBC\r\nhjrMl9BvxUfXOk7loVWTDsaBHEzb0V1EQYg1NEN0ur09IBKPkb400HZ9EBlb\r\nOVrtAxGG7Xg5sdG66qeQcoeVVB3I0zYueeYBeHaz5zwbLmjrE+FexU+9J6OS\r\nkJV2wGSyNMrHcJTaotahryax+/7iVoeHf9rsUfpl/5s+TFkCGpXKhNI/54hb\r\nJGYPBaXEZBUeUvW1xb6ZQ0OfFm2VEiJWHk1ChrGeu3wDDR4TnwI66z+vbTHk\r\nyZbz4DYvxHqxysRIJfuaETAQxlIEUEYKFYEuwdhmlIlPJhbWWJ3fH8C3rFSP\r\nKTGRd+FiPoioBsIH0Gt+a0JyqC1gC4peOzOwZ0p9HAEZNs+SgUHlMcOQr6bQ\r\nrPK4zdQroF6wjeYvC9kXjHmPxclZVXHTXfIISFxMoMOcsqTF4JOpPtVKwWLo\r\nu6LZY2vVxvW6QfksmfhEP3RXN2roW5Nc+QyVH/LJZ18LKsfBGe4rZyUEFQGM\r\nKJOuRvsUVPxVs0B7uYktYr0g84ySnRO9mhR3JPPOmTC9byeXKENalh2MKl45\r\nqUTLF5kCXR8S+wL8cXjdNjXIvjDmMi2Y11td2cicV9AlgDXa+vRTBlM49JK1\r\nfekOF84Ts4Mv6Vv+LdnBxqSC4gO1ZDzSKVY=\r\n=hkQr\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.3.1_1654101996475_0.8800645981906536'
      },
      _hasShrinkwrap: false
    },
    '2.4.0': {
      name: '@nrsk/sigma',
      version: '2.4.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '00166ae3dbe367292e8a38f7609087b5d74ad016',
      _id: '@nrsk/sigma@2.4.0',
      _nodeVersion: '16.15.1',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-jed8SYR3ng66+vFMZp7DjPd/fWe2rghihBdwKNEf9Wfl3BQ9r3JZaU9LdjgGITn4jwCabMro8qP/ektnBwMKLg==',
        shasum: '494a836c55d45485be933e9e5e6da9cf84c2540f',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.4.0.tgz',
        fileCount: 19,
        unpackedSize: 145034,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQCDOxrh47Fxw6GPU09sLjmWXjNOS4l88FcitCnrXGKQcgIhAIAQHK+pOoxXDHm4RTbqfA4c1bZuWpvlA9czbjytKFMF'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJiwM8ZACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmoZnQ//Rhz201NKtknv2dZO75aEfgntcF1jgUKYmZ2DriO+LdZIQnYN\r\nFW+l5mS415d7REBiF1nQ5mOioXi6pA9dV038sayiZ/Ae1SihaI15sSsDFy9m\r\nUrzB07tAPONqGNjc2fWAPiXRkU6tltyzD08gBiRYpvOf6TANlphNEK35O+Dj\r\nx9z+IM898SbRFJIe6YlkG/HddwRw580l7YbT+qtL167t0lsojhgshBsbjsr5\r\ncsZYul2/TQ1N59bjBsab6JkvjHLuVxvD7MRFDNu2RWq6hOoJ0EZOw9Q9iqJv\r\n0hmbpFf+13K7H1wbnWwWRk9U90B8cWdHyLiP6sM7g6snr87PEp1QUiWxjgAR\r\nmcrnPw+KqQ2itpSQx09x902Fra8a1jHZcaHVctj92h0pY7JCZyiDd9nAP0up\r\nYanTXRO5WgWqmyW14mv6LjwR5O5G/JWSy3GVRNJFgacHcKYr+SFOM+uITqBG\r\nXE/Q0TFZnCTBS7uYyi7qQ+UyNPgPDAaTbXpjnHNSU2kHyRBtsMjLL0qFlgpg\r\n4rQbKN6lCsiOYwnVU41wrjtBlLkb80d8LX+2ZgajKBCejpMz2NcyxSDE4a/Y\r\ngfiifq63WqNCMIZ6xjXzOVkVFot9ivNAVkc7Zy+UYLVDwmITd4ZM+xP7NT6d\r\nVv3BUxaoWYlrvjhalF8/qpuXviU/W68HBOY=\r\n=BdYH\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.4.0_1656803097671_0.006384140269263039'
      },
      _hasShrinkwrap: false
    },
    '2.5.0': {
      name: '@nrsk/sigma',
      version: '2.5.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: 'dbe157ac5db71b771201fd7edcce275b4af3ab58',
      _id: '@nrsk/sigma@2.5.0',
      _nodeVersion: '16.15.1',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-m5hb1JoNPYgTECskzXD82JL8XghQTZb/iRTTMi0QGbOnxHaCmaI3x89uAvesB0tWuG7PMR4bripHSGOlvmwRLg==',
        shasum: '5c47186b4e4d5234a8bd42c6f726b88bbfbecc3c',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.5.0.tgz',
        fileCount: 19,
        unpackedSize: 149232,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEQCIGhhlKq/b+42X2akH+1s+OAuxdk0p14pjCyM+FAz/xleAiAOqRRxxIZioBfXFV5HRiFc919gCvQUJEFtrtkX6SkNGw=='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJiwqxQACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmq94g/5AJ1yfpZ0UD9RUHVLu5kefuDTq8ujIwdhqrRYoW/rPZhECF4W\r\nm7s34BiO+TwxsY9RpNWjaPt6oPxSNNJIKQBuOpdSGjlEXWsQAbij0f4AV/jP\r\n0gi6RaQWEJt94SKflpcWROzYfDZSaP84mNKmiYGcKKYK9pDRdiW64WZRPyjA\r\nEISOTWmvr4yRnq73YIpfHP04j8fGei1sdhDZi4LXkjYq86J4ypP/dz7dXn5F\r\nTLH/S4rD5MpC7IOg+bsm+Owtmr/CMrDFbEufg3frAs7p5CoZTnJPp/2Rplkj\r\nzP86i2hyZ+EG4KLgDtSgtwSmzPsArCQ1eCzgq1JDiGrwvyhjdaUTw+HgU1Zk\r\n+ObYFPm1SVOveIcYKuJSmUjcXAPY68TFVaxPs6ZJbxvl9g2JqrJdNBD3tjGP\r\nlULiIY8bD+vcEsOKDjZQF+0RNDopLL8ZYthUTw+pzIlfXWg3KIQUxVz2ciLw\r\nz1uHT7fuCOzXx1zQ4bSuASYrxB4f25yyhyRt1cMtPhYU/No5JJEvVeYNXniX\r\nAV9UQp/zE60bQ7w6WqMol5V+ac41jpMBFY0yklcER8y5jXs9iNtO/V4Mzcwt\r\nbAM82/JRBfTb9SyFhfea9v6ZSK+C7czOt3Ln69Rggp9ymMaRvdUglU0JY7cU\r\nMpaDTp26K9TEh4pH8NIpPyLlH3WEoNwaviI=\r\n=u3qK\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.5.0_1656925264314_0.7778616063299524'
      },
      _hasShrinkwrap: false
    },
    '2.6.0': {
      name: '@nrsk/sigma',
      version: '2.6.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '64f8b55b56d19c498081b2224ff798ac147a01ff',
      _id: '@nrsk/sigma@2.6.0',
      _nodeVersion: '16.15.1',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-xmkbxY917BvTIqwCdsztwT/8jzJ9sHbfsNg1qC2zezpot+tzHWKmqXy8tY6p3LbMwYqCz533wG9EpqC4QL5Orw==',
        shasum: 'd41a20bb6fb1cf970ecaf59330eb2dc3687a58fd',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.6.0.tgz',
        fileCount: 19,
        unpackedSize: 154146,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCICRE2lvh2daxOHgN+8DraRRsnvRWVPpdLIc0RYDlcMTxAiEApqLlLCoa8nsJ0068EQnuYtCyzh/5Lt8vHsRQUquS/4Q='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJiwtvWACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmqwog/8CD0TIuX7nYSfYOrB5wPp+z69Ycs6tm3SUpXHbYPujhRjdhtG\r\nuQq6h4cFunTRai4KaVlwYltnJurTy5GPS309MUP58L9CwEikWHyiKGqZZMPb\r\nBOfq27OTxrqBawodQGHle0LgE39LI5d+RykfRCYyOQfWZVht3LfiCeRT+m1c\r\nvGHPFKi72JIx7R33cRG9b9Vi8DQ36nKZZ5dAYV4APxfM90HNXqfqtfWdkeSV\r\nxxlqSOhCEDR3tIwJTcAnWrcy8BQVE7wKPx8PZUcGP64Om3Yj6x+fFBxefccD\r\nO9ar1nbj4dQ0e4YzQD5/+tKssxJHsAcsut6dl3qMua6/T9jF6Fw5nkkiQBuT\r\nPC0ZyHTQcSCBSPleRaLyuOjYLTVs8Esvs5RKu588otfUEyyzskO+lOMmMPIo\r\n90OaO9GwhUxITBih/Zp9oxXlJqG9lhl3JZ+ByJAbdFjLS3VgxnewJXe1IK4X\r\nS36aQDAFMY4W72MZRXb01xjo5HyKbwY9JljXKHa1CvCQyq8Ct+t7st7ZG4ri\r\n9Y4aE3glhoawsYMYy3AhiFWY2o5CNx5ROdGrjS72m0uzDqXOpnVYq3KMi5NL\r\nbaYHOONgAyNRjHbyt8oZJlRE8zEwX5g3AdqvvFrWuXIvY0Subg17Gf/kbPVU\r\nacsvIp5p00GxKgofT0LORRoD4cKPAJpPaeg=\r\n=FvR9\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.6.0_1656937429964_0.6000921450502401'
      },
      _hasShrinkwrap: false
    },
    '2.7.0': {
      name: '@nrsk/sigma',
      version: '2.7.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '63e31669197f03aac5430f2a7970643a8892f005',
      _id: '@nrsk/sigma@2.7.0',
      _nodeVersion: '16.15.1',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-5b3LtlY8C3rqfM/kucf9FQGlDXDMIaa7ZGTJ7UYCL9UZpi+yyxVj0UfFDhZFd4s84+7BcKgyNIp5HC8/GAFvvA==',
        shasum: '268fb2af1d5648754a046280582122b9dafa5278',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.7.0.tgz',
        fileCount: 19,
        unpackedSize: 159110,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQCCE5m33VI5Nq4bRiOJapoZ6juICVy2i3Ve6gb0WAUroQIgTd/cmShehG1WtPFMmgOfZOpagHorwVT2Mfli4oae5zc='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJiwuU6ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmqJRg/+PEX42bQYxHQQQBrVaGOTyQ+FjvvSEzAaAUSJl4Vwlcwp6GFT\r\nLGla29HEYxLPTVk8toWHM0uRe0QiJzX/faKhtgkDx2FdEmwAN19Hqst555RG\r\njSKi5PmxfhaCXip1IU6rGkg4SzialzyC5aRPS1AjBfQHxEIvQvPEHEWuv4jX\r\nTfTwFEbuuB6tptgk5P59JDdH7q8p07AG5cAwy7vTm4iTxdC158eLT6wjd4Tk\r\nCs1wwLLJEpk0morpEWYv80ca0aMmYnUSLdXUmTYKBG2FTfjaEEx4ajFBYMY3\r\n/OCHZT51LNtfQHZe0bcddbXuGsYVjj9SLTSVP57jcyXiIP7Up+I5Yve0AQal\r\nsuDy3D8OL48QUCyLnBv6hfig8VAUfMSAuJTb1o88FcGVOXPoLcj0eUnTXc/v\r\nz1nWgd16QKX0cs5T3JmVrm6jNq0vMnk/Iy/iOQQMosDn8JLz+Btve9o6irUM\r\nxlzjC1ttW9QGzsQnZT/0VQaddDUA4IGg2DzBQUz3dt1KhdZK8uUcwPBqa/lr\r\nStkn1qvYXr3qFWgvZ3ywghtlkSmN7WuO+SV/ZO+m6G9GjMfQQUpaFaiHhSGx\r\nuPexXUyuCCYO1+n5FV3y+6FA5Ibe7HfjtmNVCb8wxtyLmXlb+YIZZThdQEHc\r\nLrKXX+ynvDBITq77OgQTS2wixi9le2ePEZM=\r\n=OS2Z\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.7.0_1656939834029_0.30363610551811915'
      },
      _hasShrinkwrap: false
    },
    '2.8.0': {
      name: '@nrsk/sigma',
      version: '2.8.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '3393f1e57409c1d5b55798befa5b8aedf032d72c',
      _id: '@nrsk/sigma@2.8.0',
      _nodeVersion: '16.16.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-EU1KsOKtAXEXb31UjnSS+8nvAccgB2hxOGpAF7RM7m8ee52skJ6uy+xVB6ckiRQBudq5XFyd0x6Xgd3wHhDlGg==',
        shasum: '3cf0dbe317f5919b1f1e8abb9ae9c8152ee769d1',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.8.0.tgz',
        fileCount: 19,
        unpackedSize: 175376,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIB5TfglqhE38JV0Aie11vfKy/fcj2OyNEKm4V7Eo6F1nAiEA7+9/ikuXEB92JlDmPFzEwNjWKYFMlkXtYSuIM0WVFxE='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJizONTACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmplcg//Rd+Lc9nH9tQI7sN7KxeOFWSIhyG2BCujOTZlkG62sbpG7RTO\r\nza00EGylAWRITV2p6trLlpdOA7r9I9FWEl4+doVKE5EzXWXfPwC+cR+djYN2\r\n1uLBiEexPfVRURQRCuAca1WRKR/ZLIjBS+6gtl/UsoMYblkgApUE3XIHa30j\r\ne5/O5njOQcRTeXeHsSqWFaCG90BHjKfq5seeV/WJdsJfLwd3HrEbsfbif65v\r\nMuldhcr1mFW4ErQ9psXhEN6AuKgh5YMtXMu1hRHFEmXQx4wBiIPdgw+BB2kM\r\n2drMyVw6zfLD+yQp9lyqr/7d8CeuwaLc1lce9M+wB46DwOulzsm36h6t69DS\r\nFIw6Y0nzQiFCvdTFaVxutyZ6wzXg3EDhWWTvR4eB9yZ9pBbnp67LbTNwh6IV\r\nBpe6pA7vF1B8AJ3g1/Xg3uGp8N6zxCH8Q3j2BI4Wu7Ow8oUVE15E4+bdi37C\r\n3ZtpfwjXb4VFeBiPSoqfc+lNJVJ9WR6scQ0aKUHIWnVyScJ65Uy42F0uYE2t\r\njZ7Hvo/YyT3m6D/pi2tausIu1w0qPWR2PV1oxhYnJgibFsz0Pox+BfVluQRs\r\nCPD9qh3NZNhUAl55BhCBsPIIZZpfedI1be6KyFxVrvsk8siu5kFpltJVno1T\r\nq3JY3EOJTFV4riRhsltI5LOvPiw58thUJO4=\r\n=Sa7T\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.8.0_1657594707566_0.3882652517541778'
      },
      _hasShrinkwrap: false
    },
    '2.9.0': {
      name: '@nrsk/sigma',
      version: '2.9.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: 'd1614baa0623b421b59ef6b57a10d190bd5a97a2',
      _id: '@nrsk/sigma@2.9.0',
      _nodeVersion: '16.16.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-w18bid3gYft41U0SGSsaKti7oVQI0j520jJZljMrUZiMwM1VMsuVPAhIc4MCCrD/Fopy4vD+1Hv4GlUW9Gnu+Q==',
        shasum: '51410434440db053a36532c76520b3d727954e26',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.9.0.tgz',
        fileCount: 19,
        unpackedSize: 224495,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQDuhIzx+P/F6FnTDO+4wBurHzAzeODNRxpdHCMLCE2z4QIhAOj6ZP+Wv8S1xcVWAChHwQQrYDXlJ9mXuRH2Ar+GHn5O'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJizbrOACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmpNYw//fNSW8kY+bSyt7kG25vxNp50U51NX4ZIFAVWU4eJ6n7P37pQu\r\nDJLhU8LZNDyo7iFIXg4hUWbdhTQNm9yKiHU3EXxqcrFvQ/1AGTmh2AzvA+10\r\nwSO6bkGJGUQOX906lAzMGjp3fAc3dfoYhKMC05/2T6J6jxN/f0LbugOjUbew\r\nnvqh8XPhHq5kinWEI63QrIZT3YPytzRSxVDbk6yr9e+8D6UCgAnqV5CzLBkq\r\nV7PJiLzXpwLhzNolx+vm9DM3ilZPtCy+LnLlsBvCNzAOhVsJQInTQL1MiXSd\r\nwSpLpu0UdfjJcfIOACbRTUA83qf94ea3IBxlW0s5tMHphSSsvoRp2fxdlZU2\r\n+5I6Q2uYMmGCvtA9xBTyglo2FJBnRw0Y7jsTXPvl/3MnldyLS9nVyryrU8Ub\r\n/lf9g1ksQs1OQwKTy8VazvyRV3AaGOw5JQow0G9zy8OPcv64kP4e9l8WPnpY\r\npzP7j9qymCHM85RYwh2Ij5pICsioiQxmprgQQ6ekAt2YwTmU2H4a958Jvsql\r\nD3rpNS0EwcztjFa0TEfNYOvz5KP7oAsHO2NC4gDqVMZtcwOB4Jitsm5cpE8i\r\nli2y+obEFp/fzqIvj3WZctyFqvzEnqq/paul8H3HehMfCWezu4wFw/UJSppz\r\nGVeajGszOWrHkzrnx55krjDKup8DT2IGGAo=\r\n=srcn\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.9.0_1657649870611_0.9473272543075317'
      },
      _hasShrinkwrap: false
    },
    '2.10.0': {
      name: '@nrsk/sigma',
      version: '2.10.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: '782a6f954f851065ec5c3175be5a33225e4301b0',
      _id: '@nrsk/sigma@2.10.0',
      _nodeVersion: '16.16.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-tsqf6uSsvsoRSn3wF/EeK0TaY8kC+LqwlO16LQqdDGgFF9oAzDiUFON9DyR+9cox+Je62DgaqqnMU2IVAHba0A==',
        shasum: '49f8d6d72624ceb76904188488c502b13c04af0d',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-2.10.0.tgz',
        fileCount: 19,
        unpackedSize: 244245,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIH8akB4w0CCxarZo1rY0HsH3AVmEu6zJy+f63GPBwb8sAiEAuNp+5g4+pOVNirK5LwG7291xupt8J1QCpZ7ixRcnkOQ='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJi46g1ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmpaaBAAl/V5whb05TfUBZdJpwmGmX/ZqHDHeyMTJRK2eSZ2ksv1jF7j\r\nIXYRDaHry1UCzrt8+cqhvsFfRaYbQWxvA0G/lJ+3jajlirQ5F5yzsf9Np4MQ\r\nbx4gu8XZWzbiDSDaFJQv5m/w8FVkZhDVdKxVxB2f7SI1RwlembO40eJQg0M1\r\n5C3oO1rrCjAOZPjsrqzRd1MzrLFngCV0PzEOOHuHKY/wxWOGGYs63Fq9X4LU\r\nx/LS5nDSTLhOaRY3VVkJLYPH627doLBOp8JDs/ZPtJVrsqU2nx8+RrmxiAVC\r\nKUJ3Nz030ig5AsKU8G+eXUewoM8DnngygpRdjbGQdno1TB+omOpG1NHdkGGa\r\nHwhUCiZtEbexU7PKJo6slEQNtC2R6dcSm14D7a4wxBMH4Lbk9CimNW6lJFad\r\ndHVUw5Ana+eWPjGJY/VqKXVQ647mtxqe/IJ/HpS5vRSOFZBD29snfGiZwtlb\r\nQs0jBMdV2S1aEcKX/AONmx3LLQJCBjKXOSEIB4h7HRvjKkl8n9enbbz7b+JS\r\n08gEhse+ewjUdU9AGFrMLAOVP//E/O+WKTSv+9A8Hn1+1ScfFqUuU8kulwWg\r\nxc9qGkDUh0yF72m0A0XJiRPyL69RB/uxmPqnE6vTJv65D0FYhH7cY0vI4ZSC\r\nCdADOTTIz9ohE0yZfugW54s0kkkGj83AwFU=\r\n=xSPC\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_2.10.0_1659086901263_0.9883841714336843'
      },
      _hasShrinkwrap: false
    },
    '3.0.0': {
      name: '@nrsk/sigma',
      version: '3.0.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.mjs', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.mjs',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.mjs', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'npm run build:types && npm run build:rollup',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:rollup': 'node --require tsm scripts/compile.ts',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        postbuild: 'rimraf dist/types',
        postversion: 'node --require tsm ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'node --require tsm scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'uvu -r tsm src/__tests__',
        'test:coverage': 'nyc npm test',
        'test:watch': 'watchlist src tests --eager -- npm test'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@istanbuljs/nyc-config-typescript': '^1.0.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@rollup/plugin-typescript': '^8.3.2',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        nyc: '^15.1.0',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        rollup: '^2.74.1',
        'rollup-plugin-dts': '^4.2.1',
        'semantic-release': '^19.0.2',
        tsm: '^2.2.1',
        typescript: '^4.6.4',
        uvu: '^0.5.3',
        watchlist: '^0.3.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      packageManager: 'npm@8.10.0',
      gitHead: 'a8e17c427d80b9b8df254a4dcdccc02f56545f12',
      _id: '@nrsk/sigma@3.0.0',
      _nodeVersion: '16.17.0',
      _npmVersion: '8.10.0',
      dist: {
        integrity:
          'sha512-0wsU0TYlFFlIDQv7FpdWg+yYpF0vrry0UyS0Dvpm9c7pyYhDYuwyPvCKMGIqK79Wd4JbGpt4977Nvx1qvaLCqQ==',
        shasum: 'f6d748d3810b37d6b6290a5a4f28743195d698c4',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.0.0.tgz',
        fileCount: 19,
        unpackedSize: 245699,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQCxdPsGJx8bVtnwkfJjuLWXsy7Rod3g0sDMSGJheo7mtQIhANAv0z7DrJxMWzmjxTcDJ3RAugfRPxc62XnquLQwxaIh'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjOPJkACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmrurRAAnAmPbHeSEe6foA3ao5ACsUIro71U7qypOFxbbQFFBmGGM4iG\r\nbV+sEOFcBXlNv8UOvrZ+8jZblzC1Ny02J5eqD4cwaH5Qiafi+ZQKZBtgQw89\r\nuN0a9gNi2rVnaGcCrIRJUVPDvEQcpJoqPwBJa8mSc964o6iCTSvYzBTfVCYh\r\n1vdWkVvqX0eotntDrPImQ6kgglzGdr5jh+a8L6p+5Oanc68dvEv+oOzbG4Sm\r\noH8bhi65Eh3J3KbcPVLKptiGxz/HWvpuEEBTkz5y0UGxzlbmBuEDrKwZByLP\r\nDtB/fU818LnLW3ODutaRGD0FvWMzbceP6KJHCRAI9D9XAOxSATcVD1/aA4su\r\nw+PuHasjlve1VapuvXMbA6tolHob/dACRpjr7F36zScNwxcBMD5TBOWEwJwY\r\n29GmqZCAHR5xClajP4Mt0jRdK3ll25TkKdpLVilJkIM4K5D7OUEiq77TG5pw\r\nDNEqHVICU835B7nhPKvj8bcsDIvEGsOMdzycMGblZYBsWQb6wZ0hQNXD1X7A\r\nQNZqTEdZaxUEATDceUJMQJFej6WfD9ZGYcK6YQQoRdDC/JAihziL5E53cac6\r\nWKmqDfwqM+7FrhTtzwqfPlKtKKEnExIaIfjJW602HOWtKpZDq/V/9poTipIy\r\neK6Z7BXv5XAS5ssI+nXy584z+vv9YLjcOjE=\r\n=6XGw\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.0.0_1664676452553_0.3004362457160048'
      },
      _hasShrinkwrap: false
    },
    '3.1.0': {
      name: '@nrsk/sigma',
      version: '3.1.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      sideEffects: false,
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '>=14.17.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.0.0',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.22.0',
        '@typescript-eslint/parser': '^5.22.0',
        '@vitest/coverage-istanbul': '^0.24.0',
        eslint: '^8.16.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^2.7.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^12.4.1',
        prettier: '^2.6.2',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.2',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.0'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      type: 'module',
      packageManager: 'npm@8.10.0',
      gitHead: '4472a6d19ec1d26282a58efc841ee723f89ce0b9',
      _id: '@nrsk/sigma@3.1.0',
      _nodeVersion: '16.17.1',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-dGWCN7n8GqGOUKNHgc5mbalNB/XNRAJWR4jRFk1B5KNW/1Vi7oRXhWqwmshn2yEtG2qlPluunUVn/UdcRXMsKQ==',
        shasum: '88709bdf9f0341bf192d4ebc03107491a9967833',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.1.0.tgz',
        fileCount: 19,
        unpackedSize: 246734,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQDGJ+LHWxAz8LApUZ9Fge1bva+LlPhhnknuSRf3uz66BwIhAOhcAzgpkQpQ0uXAtqmlbvGFjodIse0Py8hp4fGd++Wc'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjQfqCACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmqqJxAAhl55BudUiX5fazkSzJOdvXrfagheqg50NnGXfK9FRFwVD41W\r\nt0zSkC6zkChVSz2FBRv9U7m6mEjdF3wNlNdUF6MjNjnSA/W8+Y3HEvqOrSmi\r\nhdyLQ4L/GT+w+Du4Faqmkz0qSZZZwt5ukWn1JhoBqw/O+0DT5W7rYh0iyp5H\r\nSnC+WoA+z4bRlqHe1/96/NgRhjxkFj5so/sEG3+hgtW6xbFK6YEpLcsRBcwy\r\nF9OVOKg0I55yZobn0IaWSazK/Qxfs+vjLIBU65E3hflyhA3Aa8calXWuU/6C\r\nqb7zFDUJJAXi4UdDltNhriKD+qfELvhS2NVVAirLecClhL5mykElq11xjYYA\r\nl7mMe9MqK9nZpjcNWTPRX70JKqYdC2B//M0poRYaOIJlIkc7nlni91ME/K6z\r\nFcsTnV4CS+mYgMwvVORDnxtqzh8Rh0qumDFzjQdl9XQ+4VQuJgCx+v1ooM1f\r\nAE7MoT052ZFcabyz7ErHb/rUoVt2uzmum9jo7WoMAkmypu6aY5VJLR4CMMoN\r\ntXdiLS/wBKgcrDjODEuupf/rRde5RkJHvdkIxqnwNvhFk8dkHEnb8/CRAByU\r\n2ZAIYYzftYbwMTYcWSSU9OiKPHEbibCiJk7Un3+zsfKL4sk0FmO+Hic/nEtd\r\n+T3xpV4gimHEOpelIU83swUS/MJiYfnFdt8=\r\n=utnS\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.1.0_1665268354274_0.059699047061138044'
      },
      _hasShrinkwrap: false
    },
    '3.1.1': {
      name: '@nrsk/sigma',
      version: '3.1.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '0ca955b4f0b79d0e01045f00cfa06afba15a7e12',
      _id: '@nrsk/sigma@3.1.1',
      _nodeVersion: '16.17.1',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-amMPvCNzzrQhJLLvhoYaIBvx+vBdQa2ttjgkyb6cLZ8WqN/x/LOERoRw2JjMa+24z3PcNCW8pU1D+z21dC5Eeg==',
        shasum: '25e8a1f81513cd3cd4f9fe23849d928de6aa8fb2',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.1.1.tgz',
        fileCount: 19,
        unpackedSize: 248223,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIHRViMNQYa1sbXtR8015jdIGFm3m9C/N6oLUBYYDV0gRAiEA/Hmox+fAd3+6NOdTWMAnb2orn8jeKeIo6LjtkM4K1+0='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjWFTJACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmoyHxAAhyGJSfZap1c0tBAiqC5rObvbgB0gPQVCp/UEtvDe/htjpTtF\r\n1P9Z9VykYquPeAKHM8IqrtGRmNMCmjnTRwh6lollI2O4i5aVYhAnt+QIYArr\r\n6PIjoiwz7LHxMTjiu2NJCrGUg+yhGX93Vj7I1j+oWrzCFFxqSmUbDfbGKxYl\r\nAx9p7zMNDqVRz+czFAJ89QwkBfWc0RFZEUfxUoF7ww8vNgtTihMWIY0vNy4u\r\nTKldi8NFGYDU2Ik96csBtZ2wGIybQ2hG9F9urSTWvJw+OpAm4fdTn5x+LH4X\r\nICGCkGl9FQW5mZUPrBz/JgqaM3Lff8YvOOT7nzop2e69dA8KePcaVrjP796E\r\nTnJeHsdKcVlZ9E5W++bmfCLmqBrbfkZJdcSPKZCz3k89453mhfjxCYkxG9Sg\r\nmtBKqqr6hrzZFRftnRkK0/1V4FVeHFMUpBL5SKBRQ1CxKklA77i6FFKlJMhv\r\nmlGDiyzyS4J2+yQAI2kxdcoViztyKKLiPLalM+Fv80E/GBfaowsCTG1L19LM\r\n2E7IkMAK7C8tRscL0ORWpJlV5DoTPeVA25Tve+7IMUC78SB1Ts8xJs8X519h\r\nYSC9Gg08ojUjR+ioGw1Fk1aBxAxb6X0pAF3EinQJUDB7LFAXNtTlTfjORhzh\r\nH8NV32DC9lAnUSUrZLMkJX7m8k3k9M7jLSc=\r\n=s09A\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.1.1_1666733257344_0.29311091794452326'
      },
      _hasShrinkwrap: false
    },
    '3.1.2': {
      name: '@nrsk/sigma',
      version: '3.1.2',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '992acee280baf35c67282373948a0438d4a0f9a5',
      _id: '@nrsk/sigma@3.1.2',
      _nodeVersion: '16.18.1',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-UTpyWV6SKUA81TNSTjPyNcMuymr7T0GFj4tIlG5rNKL83cxV3oR7VlJYr/UwchDQCHqb8Oh6P5UXJJ9Ax3p/Bg==',
        shasum: 'ff0966795c5125e97e62dbaa630ea5de0499b00b',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.1.2.tgz',
        fileCount: 19,
        unpackedSize: 248353,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEQCIBc7Ysl68uP3oHGCSG5iOPU9D9heqeUv95jSwiz6klJ2AiB4EkigiZ3pUKPTMiaBkWYeBkZmUBqRaF5fA+5jgEFNug=='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjtorQACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmp/qw//UCdKK7Ey1QKPCorh0b7iwJ+DMmx9ZtGtw+IVBhc9yOoaVHQA\r\nqWIxC9Bp3x9bukU4Un1cFRubJTWi9+FLLBwCx3uF3drsSpBXjswLHh7opAXA\r\nVTARDjUv4TrPwUXz5tiHUR2EcS4JJ911NTC4XRL9QMsNhto4KjqOFX3u7f2z\r\nTJ9pMyYhKpKTTmv4QrTNRYwcDFf2XYPjRMozxuKDV1x8zI0WbmFUSKEVk8g7\r\nmEXwd2L+5RPn+iU1vaKX2bQ/39REHypgvYVowQP3330MPOUiqptt9sGI8AE2\r\nN2PKkqP4HD2HkUDgz7rc2bcoEQQwjoY3TbtP6TEt52XGYu22SPJfECBVTV6m\r\nCZZUtBAoGMybBXGu2TAMTvPU8IoKwFEcF6MX8Br2+BYbOstDgTSlGqtMc/pU\r\ncC6lR13DAboUrIQkrQhfz1PvLZQfpldOU6/uHWq0qUkgxdmt9EJ6PAt9Xcqh\r\nzUaCdBmS5rlV7OzFZ9Hy2c646RPfu8pWVMZXxCYIu8f/68c/pZ3eiKnymwFf\r\naoEc7zlVgZtQ9MnG100oXYWzDV/NyRwqcfZcY7g4+lDXEW3Vk35ZCya+41Q/\r\nKOJZfP2cp4vQz9BCx8YHIPdsOP0Z4lxQWf3FE6Y4qpQvzJbgPgVkBuezZA2r\r\nFb8U3SuSmNdBLLsv4Eu6A4q9ZvOOex4Yhd4=\r\n=fR3Y\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.1.2_1672907472698_0.646188814712864'
      },
      _hasShrinkwrap: false
    },
    '3.1.3': {
      name: '@nrsk/sigma',
      version: '3.1.3',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'b1f48f177ebc15cdf7dd3caba5098b8f79f92396',
      _id: '@nrsk/sigma@3.1.3',
      _nodeVersion: '16.18.1',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-/BT4/Kv1kFf98mR7YawUUe38PRIm0x7At4ZtO1ESWa2+XtAE3RbFx2hoDg2UZB9JxuYh8SXIIT7gFEcFh2ziaQ==',
        shasum: 'f4e7873eaf56c5f6ef8af55dac5dcf4a3a3fff89',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.1.3.tgz',
        fileCount: 19,
        unpackedSize: 251266,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIA50lkEfaQQpgLbZ4YnHHvZOzKWusGDnWlsw0TArP2RtAiEA1I0cp7YZe/mYsjGtMEuqQW7pTsQcTkVIOFO4K3OEDmw='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjtqx4ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmo5YQ//S35FtM+HiTPJa13H5rGeLgnxc2mcwXHnh6/N/SJFXNYF01KB\r\nblbwjzwV42qJ07lGwW61c8/Fc3DdXIqRQyySxFyfJAF6dw+a208U3HSmWD0O\r\nDGUyXjhRpgZ8WGYMxkH3/ZvVgMoFMEoJpSsL4tq/0/mc+xqADG+M+RwrRCoM\r\njf96e4jI6gvboxJHy+aiJJl23dLsxXoHjjhuRm73vhZGwJxWWBla2SFe11FO\r\n/MaRUwEve7WZbQU6dScknynC79vMdO4puIJtcw8Thkg8ECnE87AetM9OlNWy\r\n/m1/YVxFyNAJ2T1KkPKPcFHkPqaZ2amJIZ/fsGZHx+fLYgNybYPBcEKTilUq\r\nJ7ndu7KLKYtQm7MBZZ0vqvUrBmziSvquPLd5YAS1Yr/86CQndszeEQhTyOJv\r\n6G8ZMboFjwKYqZl4hFs/GfD442Fxc8bEZDv9wdnFVDhUtbaaMP0COlEPX9az\r\nXWkaNF7QGpgxu+2N/Jvkgk0E6R+Y8g9AHba7L/qE3rUXL39/a5h9WBTXc9Vx\r\n8T+YFDPrVYuK+TgHVpiBl5E3MF81QKpWXqaz6pyuyck2nRn0Kxi1vBieP5zL\r\n0bzRDGtZFL+rj8nqSCBSKVmqMVbb/Vt3cucVax5CdvgViRt+6czRbmeNWNdZ\r\njQ3fwuGHBE7x4KUXYxFjI/wb6O1VHj3UdHU=\r\n=1Sg+\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.1.3_1672916088627_0.17057633939896277'
      },
      _hasShrinkwrap: false
    },
    '3.1.4': {
      name: '@nrsk/sigma',
      version: '3.1.4',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '7073ae4f5c5c286dd788718034ee56e2c33ec5f9',
      _id: '@nrsk/sigma@3.1.4',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-OWsDztNzOlBx5bd9OgDZVLs5rwns0oJjpeHu2yI8Krkpg53GtDY3bz20qpU9dF9k+spXn8QnjygO1Tic3mN+kg==',
        shasum: '2d916db670e361878f1901f666d2125a9694f2c2',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.1.4.tgz',
        fileCount: 19,
        unpackedSize: 251736,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQC5HqeCdsEz+WfvFugILE73o3k4jXY+aVipCYN7irWuSAIhAN3akAyjeautXeQSAiG/CaP1bwqueMtqdBfqrpGe88KI'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjwo42ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmqlexAAopWSO6JqnxxrgObhT37jCP+02XyyYkmy98smvuNRFD22+j6q\r\nbA2RnLFItkniaNc6iCZqBeg+7UVZdUmQI48keob641LCL6nG4CJW8OEuWWeP\r\n4sdUjgTkiTFGt0+O5oBjgWj2BplnPMBJvlJsnNiBtTYpX3F+ffOIvK5WQRwN\r\nADpHde007KLhZJM4HWyyzbWLofvF2G21vDKb3zoBwytS7uZuI9c2UyLMqP1B\r\neQL/A3lsWIzjk+F/AG7JhPFWKq94YRLyYemewW67VDqSA+RlPBlQpJoyyvmp\r\nS/kPAmXUcE3hSCEjbm8m6alWywafTUg0UPE9jzure85lID6obCfLC/slmMi3\r\nwz9v7Qz5yq09AZ5Q022CD4EuVfU1mPzsDG6Rpbki7KlYn1oTWdcmU9YFeXoq\r\nvpYxN9d6NcTYPutm2KTWRBiQVocDxIY9TpPIAAUDlEqdvRQ9Ox39KVrn8VHx\r\ni2GzG8lelb25OUaV6zAtis/Sj9r20P8OGp+HwGbFD6JbM2M/eWoCJupc9q6T\r\nxCIPYvIKw7lTGgwCoSXjtHXX+eTiSN8J/QaR8nYcjlmABZXVyXvXzuLSt0ng\r\nlTx+PDZtGPgYH8u7XrtYmQMTZzJsMfX1CVkSKJkjcOFHFA5vIe4kDEeBdP4b\r\nm1LhbjRG9oh9MNIWHErphA9s6XsmET5s2Ow=\r\n=2JZy\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.1.4_1673694774463_0.031901357973412425'
      },
      _hasShrinkwrap: false
    },
    '3.2.0': {
      name: '@nrsk/sigma',
      version: '3.2.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '516d636de629b0edc75a85a93b813d41a226bc83',
      _id: '@nrsk/sigma@3.2.0',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-4ej3dhjERQ95Z5cNEld6DmpFEEL4ybZ+SuPAcX2/K4vZskzkzzQ0LZ8n/6NMjEsLeqYay7uL20gRvcrjEPZPyw==',
        shasum: '99463e10a75290395435b1d28fa52959bd17ecf0',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.2.0.tgz',
        fileCount: 19,
        unpackedSize: 253841,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQCuTfDXOasAvIXtjKDnJZWdU4RR5NxWczOeEfSRoHDr2AIhANo7CYsK3PrO8DMhXncnELuh6wX6B+jNf90vqPB76R0M'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjxFGXACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmpeKw/7BrMES2WDsSIV7rAZrqlxpituWF81Dlz6CXSP6vrLuwoQTZD7\r\nMtBDm5ycsqC/Tndog2uxsve+TmM8MCzkcogBfdZ7c2HFnrj7Z7cAp/RjSZ4E\r\nRo+C0ld4wLnFFrrz1i+i53tkNKRAlo38+Y0Ldz2vyAueaBQ7FkOPDDd/GZPS\r\n5uHRUPix3yCwjzThVXCGSDVWmgewYmImCcxQIhbCxVLOG7inEAt4aB0hL7oW\r\nZyj+vePZqhOUfq6SRpQLa2uyr8qeuSknpnXShDnUGRhemw8F5Ex+jqekAWxW\r\nUobNEaq3IdoXkZHY/l5OEkhmolSvFwo48IDTDK7PFMzRH2S/EUe1PuyFLooS\r\nRFyunU/nyY6y4xh0tAlCPmXD/H7fDParKxbv7ebcWoEY8cKErIvDESXPx5yS\r\nGMBB1ddxI5kp8vCv4OsVRmbK1FMkn23m+iKER++hFTBkjQBg7oiVVqFpl2YA\r\n9jsBQYcTENa+B3iH2vFJ+u8b5hsYsKfJnAQge5UtSquddi1yDFZLCzRIlFkC\r\nCsP0N4jIzPQNGU1pef1L8n8jjWgSGqWmTOPkFQZ2BGo7NnJkLXklzcUKLEJB\r\nJSa7B/xKfcWwjlTCafCGGPaE49QBX4MRlSBKisYto768wU3OWGHUla0HMaKV\r\nklJ5Z1rEylez4tBROigs3XUSn6vvgUiqyqc=\r\n=1J4u\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.2.0_1673810326842_0.10242299980752989'
      },
      _hasShrinkwrap: false
    },
    '3.3.0': {
      name: '@nrsk/sigma',
      version: '3.3.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'c2bb711207669abb17c10f54c37f2d612e2363db',
      _id: '@nrsk/sigma@3.3.0',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-+jfiJzDLNffzhKDq8Gg95rpd+sCaHfamcp/W29mxz+HxqP9q1sEHDlqNpJ+cx2BKo20Lf/8UgHSGoDZ9Gf67gA==',
        shasum: 'c40e4590dcc770e49e92263434bf7524c7f777e1',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.3.0.tgz',
        fileCount: 19,
        unpackedSize: 261593,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQDfOwqE3DjK3omx4HmtzfHdaoYPhCrXvPtZurvYgn00HQIgNcDFb91lN2zyt700hjYbCCKokZ9TQej4Use//5j+wqw='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjxGcHACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmrd/BAAntiXTps7kMQ8tsLTavudMt6zGx1pQiil5qpnbZp2YCLlDwwt\r\nLOOc2lN6hR9LzyUChau52/mJZ1vZClvl4Urflmplg0EQBiBrXGaYTMnesNs9\r\nME+XeVnRLUNBmXtRXf4+j70V6fHiXp/FumqRO8f1iaAcOarEmfq9hPMTkYNj\r\nPRFBN9d12jp5Xc96y16u0jcEd0KCjohSGO6dswpjqdsa+vUy8yAYAzZePmCa\r\nkBZ7GqnHNL/yukFnZKyqQ3jYK3r2AP5s/27FWJBgylIct3Gfr7qgN2HYfljC\r\n30Q/sppqU5hjLi88SvNSpzMwB4/zAlnLfaEFwLIK97EFYkm5uhfpyxCYWVll\r\nt4hMOE9v+cIEETEFA3CHDshCo/zkUO3QOg6ef0iApmgNeNIZRhqMgNyyCkxL\r\nfzxodx2gPhSC6Fhb7pxojVq9pMIZtRMa5HlL2Q2KJV7DECFRrlazcirNKG0R\r\njFw44zsyOQAdX7UQ3WCoo+Nh/BZQMV7VWGZ0b1KJVfXyC+7dhb9Y33YME7yL\r\nsPD3iIrbEUrw7tynRXe4qTdAgNmYNU23LwmrxtcnTaBoO1VnipKlh3NbNrT4\r\n9izV29wWZU01TrEzXPCXgXsb0nM3Xv80LRLxk1bX0W43vNiMCxLYl9Ssptg5\r\n+Cy/My4eIAOnm9st+NvCMCywLKFRB2hLdsE=\r\n=yVPK\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.3.0_1673815815057_0.7315819569272002'
      },
      _hasShrinkwrap: false
    },
    '3.4.0': {
      name: '@nrsk/sigma',
      version: '3.4.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'e5207fd147dc29c60d8272400f4a391b7ca42437',
      _id: '@nrsk/sigma@3.4.0',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-4k3ExtDIM2NjNSJ41Al2C6+zKWwKINc8ikH+DbwxddeoXF/NnlYB1ZtLMtcpyBOE2IulHj6yErB/lJp2xZwJuw==',
        shasum: '5b03c01f46251a07202a4f3e6015ad56aa679858',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.4.0.tgz',
        fileCount: 19,
        unpackedSize: 267792,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIQDA6VeewKUoR2d/OeEQZx1Biy3CyM4rnoG/C0j6xc1rDwIgZ6UE9XTJbviX5QxnMgqaNAZe9R5SsgsKAcIuvDxaJgY='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjxYbaACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmptVg/+NzFM3K/1nvVcwl6rV4omIgAGvgqGjCXFu449hgNzSCaQqWSW\r\nwi2ThNmou/XbgoXRQlTJmOQpuqtY/AQhmo9UYTEvPpnMlyS+ALluHIicSAkK\r\nsAKZPz2vieQ8U14CoQr1uFl71a2vhQe/4KRDP6naMOG4pfnr6Ex18dbEK7ZQ\r\nD2PZkiZdcupSM+eZDH8SPslHR8Rg8Vw1fgKJwv61ZRH3PL924oTCSdXTe7f6\r\nhtC5UZIn7uaLFV2/pTb53BssMUd6Zuoe7pZsAWN9TwxdqUkFD4XJxXZuBwJ5\r\nIu++pH6TdfThyqMaRTLJaJQxtWPN2n857p8emrk8VoZzYudxSUF1SEr+nMR4\r\nV2MsSh2aZKLblewJtJ9JHkNOcPrlYyhJFK/69/yn2h+IE0ubgCR4EpBq6mFt\r\nuvkBjdJty1DtkDbqvI3AOybu97wYSJ4oPNbn2bpaG+5x/6Ix13P3sqARxn4D\r\nvRom+tSkv2ifj4EjT541ba9/lo72T625lU8Oa2TZqwSnhwjpIURQatklMSJC\r\nFxxHSaB2BVEOBcdeOAx4Vc5mV8E93PwERFO2TjwRzV6c0a+xpDnPdXMG6aVR\r\nNsJtINhwm4/efiLngYEa9G6Z0j82CNYB7zXnSVzqNMhT+xU2XxbWjqIhSbfT\r\na3aqweRGNFzQTmgIrDqXt5Fc5i6tI/xoqic=\r\n=f+yZ\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.4.0_1673889498085_0.15248294644208205'
      },
      _hasShrinkwrap: false
    },
    '3.5.0': {
      name: '@nrsk/sigma',
      version: '3.5.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'dc23f7fa80d1d4fd1eea5f498e681602fb89d70e',
      _id: '@nrsk/sigma@3.5.0',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-TiWFzgCYBV1+ju3mGqSMqvEJngYIF0L32dOe+66nCqnmF5rgowl2e4wVgPqP5B5TccdHUOLJ3Ya33QmCwaLPtw==',
        shasum: 'dbc3b5d5005062c2e0bf2deeeca1be96bfcf1e2c',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.5.0.tgz',
        fileCount: 19,
        unpackedSize: 274276,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEQCIHnCrUFrjJKv53jYCPsjDturJ3TsZHDCU4Dx66QfEq9qAiBD5j5BBva/zkkyReJUqW5YT3tvV2DVM8X8anr3B19peg=='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjxY04ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmqF7g/9GJ+v38Utz+2wD0Akwwuj6RzYZFNEPxIDU2UZlIYrljlHFh5M\r\nGVbh2gsl197vdBv7iokbxToVXRFVMMWJbxkqTVp/yhEU72XJTHcsL/P4knS/\r\nc2cawEDIDCAa+c2H7SZerfAadpDd22VzZgOcMLP1kDSRc5I1/bVdT4ox0lKR\r\nQhwU1cUGwfFKJ7AOlCxlzVDWcCutmttBtnGKUdpq4JsuSOjCNyvY+esQNfX7\r\nKSDSRPGH4gk0ZB9ChV2vQLtNC2l/vmBI62eK2mzgMSWfRwoPOsnSL2l41YXX\r\nB2ufURQEEQNa3Hl9PHjGBj+nucgnbpROXTO+nlpp7AgUIDNIC46NzI7uxHH9\r\noemxFMgBgPGkcbDj+34xaTm0fbdq+2u6Wpztpp17tpeCqUpLFhy0ag+IYAei\r\nhch8SFi5V2sX/DRcuBlqa3DuMWzrg8VlOQkVjz9rYL1P7d2FYfrWEiVAwpCH\r\nhBVjWR5ny5dY23OOVRelwTGf5G0OLUoCR0cCeCMJbRFT0R5ySGqzo66WTIOp\r\ntHDe2tDq/jKJBlRs1QjoP1kKXrd43VkrzKXMVAQu34Fwll65mWAdS7FKnQaR\r\ncRs0UNPKadbH195HAvdLdXXB2oAPwH2Sr0Tz4U06XzF9R6tCfWmWN647G/ct\r\nciQqUIaOvzP2JYlDTzSW43+IsfPoNN9cnUU=\r\n=0e4k\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.5.0_1673891128677_0.8187265193124933'
      },
      _hasShrinkwrap: false
    },
    '3.6.0': {
      name: '@nrsk/sigma',
      version: '3.6.0',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.24.1'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '8b265b3cbe790832a9ca5373eceeebb60d4b85c7',
      _id: '@nrsk/sigma@3.6.0',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-3CyjgWjhKLkXJBBXgaHjSLBUskYTqn2MwqAZPJw1dX/jnzR+16baLfMeUkDK8h5hNrh/cTSh0qU+MrBoSTYpNA==',
        shasum: 'd24e88a991b4bd0ccf57a904ab83641a1c3eb232',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.6.0.tgz',
        fileCount: 19,
        unpackedSize: 289983,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEYCIQCrHuVmwAN/SGqm1sv1PqCtsdko69aTypZw0LMAGV5GTwIhAPVt1RAeQKINzk/mmx+beemxsDNMqtVzKm0IDwo7PKgp'
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJjxuWnACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmr2wg//VdJdTAZmSA38VeRo7UQEyueS7L36ZK11tdKyASyM/UgmyCfd\r\nbnsUPg2BZamgtmdRuhSk8FVWh8vcJ7IQfawvswNtYImybScvmQV+nQ87PKsC\r\n8MFShv2s2VqPSpPRFrbIVdaC801i4FhsMdZFn9SkXDuEF4ziEym/hoMgXWgl\r\nejG2wBFrsP0uSorO8Yk3rVoA2GcZBzh3vgX7L+l7ndoeJiXjD3sMOGkr1BWp\r\nAjPOF2pX7D5jwec3oYl7T+iYoii+vJlm7yhCVJA4etuejZuko7Fo1f9EhWJr\r\nYIbeguDhh5qhZQQcd3gfNuZXcXyYn9GWPOmsgNIyuSMMFcSCIYkUW7jvJ4AA\r\nNMmyyocX3iVScVZhh/vfU8HhoZvtrQWUk9xSxjaccXSTy1715uxCg08Z+n1N\r\ndf5kWFOuwUDLw4d+ep+O/itQhpS9BIMJM97OG8WEPQnsrG7D6VxZ1e6UqYgL\r\n8CpBkgRQ8s3k1bsHrw+H9VaiYhjACsmNLoNEbIukFnkUZf3ampuJQg2WwdQB\r\nvIiOZmZnDb9FdoZsHDhp58FZIWiHPqj4kZCyPTS/VWQE1Eq0vPnMqt6hWexY\r\nBzTW24bDaol4OumFSmth3rvD6enC41yZibUmYJs8ScFJNh2hbQW6ml8ZqXfb\r\n8jYj/4O1M1sgXgeirMvJhqhOcijyHB5GLLk=\r\n=Q6z6\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.6.0_1673979303257_0.36694860887463676'
      },
      _hasShrinkwrap: false
    },
    '3.6.1': {
      name: '@nrsk/sigma',
      version: '3.6.1',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { import: './index.js', require: './index.cjs', types: './index.d.ts' },
        './combinators': {
          import: './combinators.js',
          require: './combinators.cjs',
          types: './combinators.d.ts'
        },
        './parsers': { import: './parsers.js', require: './parsers.cjs', types: './parsers.d.ts' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:types': 'vitest typecheck',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.27.3'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: 'bafa35e904ab80fef1d303edc0468c8218205fd2',
      _id: '@nrsk/sigma@3.6.1',
      _nodeVersion: '16.19.0',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-rNGKYlFOKWTj+BfSFa4Yk/EtOZKMaFDcmuyqJOLhr4SnyQQemKMuSp+CHvcYiJhn/dL68jJRNV/wcjNcp1HsTw==',
        shasum: '87fa0b8b055694f8f80a1c0070d493138faca6ae',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.6.1.tgz',
        fileCount: 19,
        unpackedSize: 293341,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCICIIgs513RJ2s3ZI8YmiJEKLjNW1YC+BBwqKiPx3YFjVAiEA2dufLoN19V29LrNACLjs3j4fzqcFkSkiUVZIE6aiBiI='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJj9KawACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2Vmp61RAAhBYPV3R7AEx1ax1bQBAi8euzbyrlMfpD4Z9ZlG/sVNxBpq/I\r\nef1HvyX2BUNKvCx3dSG351GWgWA5k1aGf4NPVgQhMj5ri3Nv2X7u35f1Jd4m\r\nQ6xBV9khEf/lXqhGchFYyfFgEsNqHCzgvWvmZVB8e3RWFQ8IhRTOAhr4kP6/\r\nmQo264lNkKvzBFCsqtGo9VQ+0wMbnsZgxVDSxzNnRVyfVNI4JQ66wWeA7mEm\r\nYdvnbSbxc2oNEmxR3GUMotaWHkihCvGq5EzHZxjNHdGoTHJZsMV5dDyQjwAP\r\n07gNJdnTtSVF8jHDnbnyjf2CLhv2fWLXf5cQ87oUF84Z1T/37VnEsmBf59S5\r\nVGG3pi6obipe0786DOcDEAPLHyUEh5xAkC/sr6oFCodxqJQzL+V48nc6LDUg\r\nyGbliwc/sfDWfXhM4ZaJDl4UyItJxmi2eFVnYfcGfW0TmkObFbd5Q2869g6w\r\nYgOBsIhdlp5KOQ6YMfKf+CmIc97RgWBM+xZMYRNiuJZAAFcbM+kkXti0qppy\r\nZfBhftV2JLAA/W7KXd7N/fGf6cny89dW+ns8JaF6o4CYlRiVUHjrjzJ22LZS\r\n1DLOjQskKzXG/akHRipADOdt45Eo7hmr25C0Ds9wulyaYQ8zvmSAtva4AoQV\r\nYJtwYQXrVTkyi2q0Z2u+mts6uiiSUXEyO2U=\r\n=51SI\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.6.1_1676977840578_0.22907215244821644'
      },
      _hasShrinkwrap: false
    },
    '3.6.2': {
      name: '@nrsk/sigma',
      version: '3.6.2',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@8.10.0',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { types: './index.d.ts', import: './index.js', require: './index.cjs' },
        './combinators': {
          types: './combinators.d.ts',
          import: './combinators.js',
          require: './combinators.cjs'
        },
        './parsers': { types: './parsers.d.ts', import: './parsers.js', require: './parsers.cjs' }
      },
      engines: { node: '^14.16.0 || ^16.10.0 || ^18.0.0' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:types': 'vitest typecheck',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.1.2',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.1',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^16.11.64',
        '@typescript-eslint/eslint-plugin': '^5.40.0',
        '@typescript-eslint/parser': '^5.40.0',
        '@vitest/coverage-istanbul': '^0.24.1',
        eslint: '^8.25.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-import-resolver-typescript': '^3.5.1',
        'eslint-plugin-import': '^2.26.0',
        husky: '^8.0.1',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.0.3',
        prettier: '^2.7.1',
        rimraf: '^3.0.2',
        'semantic-release': '^19.0.5',
        tsup: '^6.2.3',
        tsx: '^3.10.1',
        typescript: '^4.8.4',
        'vite-tsconfig-paths': '^3.5.1',
        vitest: '^0.27.3'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '1de06aa0487397ebb578353ee9402b9dc7e1a1b0',
      _id: '@nrsk/sigma@3.6.2',
      _nodeVersion: '16.19.1',
      _npmVersion: '8.19.2',
      dist: {
        integrity:
          'sha512-RsLd2fMn+dvcz9roMbXKl5Jj/IcKEKWH6vMRl2i9rZa3Jw1WsSQZgMm1Q0nYq61AT3vIq64Pk1iNsFxIzeAijA==',
        shasum: '06782ceacb550eea5ba1c779a43c3a9178ee58f7',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.6.2.tgz',
        fileCount: 19,
        unpackedSize: 293711,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEQCIDfDWWVm7Gdymy+iu444aq4LJQjwY/M8uUUkBNCdmqCoAiBGknqNr+XcEJ/2mNVhmBpOSyFigEt0X2AT3qBTgOdZjA=='
          }
        ],
        'npm-signature':
          '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v4.10.10\r\nComment: https://openpgpjs.org\r\n\r\nwsFzBAEBCAAGBQJkECI0ACEJED1NWxICdlZqFiEECWMYAoorWMhJKdjhPU1b\r\nEgJ2VmopIw//SqmlgQf0SX7ISGpX/BqOntruyUq23CKMgDuAM2t8zhHZMMjM\r\n/tXajU85bxpcjVTNyXGupgnHaqDGYDRsRTVgypPpG6sh97+ejBWdM4NQH6IV\r\n/o1Z5xz1IKpApJ2Xg9WGISzMnuPWY55kJnpcN+2+D/fVWTXLNg4HwLzBF/CE\r\n2cgXTGOGVhp8xyMNDmV/LA3ZVoA1jjTze6L2BPZjEKbEObJGPP2sffrWmjvo\r\nIffqaSKO1rMdGolDFChvcWlMThRjxUZon0F7q6j3Z6vrrE1qst/RY36Y5lZn\r\nAgiVeOYAD3vg/wFeOghh4WHTx/ism6Wci1p9GxMkaDlzdi48NW1TA4cqH0Ky\r\ncnDdpfZdJllUoaQUzol+cSkjqmBZBhsJLCEH5EUiy8ry3JSzNLT6rkakd0QM\r\nfDBrtR7UsMCboartJ9u8ydjPxb89Tsg+oZpVoE9qEMrzif+Zf6fhQhb+DlE+\r\nEsZSyGlUbE3Lk+d7aoP95qKOx6MBmC3GuJpLhUNYXN+ns5uUGIPsalx3P5s7\r\nUVk4ENsayv7/GhpzARciWAz643h/tiUUeVKIYIpwn0Jus44l6qR4WMuJXO42\r\n/4NdImK98CVryy60y9ioFd/TfAKD61Mssxkqpcykhyjs8Bj+u5coSo6qzinK\r\nRmXiibgQOGX3tKsBz0OtqicGsfmwubDGJFg=\r\n=wy46\r\n-----END PGP SIGNATURE-----\r\n'
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.6.2_1678778932507_0.5511064482689383'
      },
      _hasShrinkwrap: false
    },
    '3.6.3': {
      name: '@nrsk/sigma',
      version: '3.6.3',
      description: 'TypeScript parser combinator library for building fast and convenient parsers.',
      packageManager: 'npm@9.6.7',
      sideEffects: false,
      type: 'module',
      main: './index.cjs',
      module: './index.js',
      types: './index.d.ts',
      exports: {
        '.': { types: './index.d.ts', import: './index.js', require: './index.cjs' },
        './combinators': {
          types: './combinators.d.ts',
          import: './combinators.js',
          require: './combinators.cjs'
        },
        './parsers': { types: './parsers.d.ts', import: './parsers.js', require: './parsers.cjs' }
      },
      engines: { node: '>=18.16.0 <=20' },
      scripts: {
        build: 'tsup',
        'fmt:lint': 'eslint --fix --ext .js,.ts,.tsx .',
        'fmt:prettier': 'prettier --write "**/*.{js,ts,tsx,json}"',
        'install:benchmarks': 'cd benchmarks && npm i',
        'install:docs': 'cd docs && npm i',
        postinstall: 'npm run install:benchmarks && npm run install:docs',
        postversion: 'tsx ../scripts/release.ts restore',
        prebuild: 'rimraf dist',
        prepare: 'is-ci || husky install',
        prerelease: 'tsx scripts/release.ts prepare',
        release: 'npx semantic-release',
        'release:dry': 'npx semantic-release --dry-run',
        test: 'vitest',
        'test:types': 'vitest typecheck',
        'test:coverage': 'vitest --coverage'
      },
      repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
      keywords: [
        'typescript',
        'parser-combinators',
        'parser',
        'combinators',
        'parsec',
        'bnf',
        'ebnf',
        'abnf'
      ],
      author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
      contributors: [
        { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
        { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
      ],
      license: 'MIT',
      bugs: { url: 'https://github.com/norskeld/sigma/issues' },
      homepage: 'https://github.com/norskeld/sigma#readme',
      devDependencies: {
        '@commitlint/cli': '^17.6.5',
        '@nrsk/config-conventional': '^1.0.0',
        '@semantic-release/changelog': '^6.0.3',
        '@semantic-release/git': '^10.0.1',
        '@types/is-ci': '^3.0.0',
        '@types/node': '^18.16.16',
        '@typescript-eslint/eslint-plugin': '^5.59.8',
        '@typescript-eslint/parser': '^5.59.8',
        '@vitest/coverage-istanbul': '^0.31.4',
        eslint: '^8.42.0',
        'eslint-config-prettier': '^8.8.0',
        'eslint-import-resolver-typescript': '^3.5.5',
        'eslint-plugin-import': '^2.27.5',
        husky: '^8.0.3',
        'is-ci': '^3.0.1',
        'lint-staged': '^13.2.2',
        prettier: '^2.8.8',
        rimraf: '^3.0.2',
        'semantic-release': '^21.0.3',
        tsup: '^6.7.0',
        tsx: '^3.12.7',
        typescript: '^5.1.3',
        'vite-tsconfig-paths': '^4.2.0',
        vitest: '^0.31.4'
      },
      commitlint: { extends: ['@nrsk/config-conventional'] },
      'lint-staged': { '*.{js,ts,json}': ['prettier --write'], '*.{js,ts}': ['eslint --fix'] },
      gitHead: '5086a860fff43ff0987e2c9290fd405d5045a274',
      _id: '@nrsk/sigma@3.6.3',
      _nodeVersion: '18.16.0',
      _npmVersion: '9.6.7',
      dist: {
        integrity:
          'sha512-Uu3NYN7zCoh5DYtpA07OF3kyfxHxdiOi2h0Y4GXzMB6XiAfWwQXKPrHFo8UX+jIbFxudNsN0QQEehasSA3RgfA==',
        shasum: '2a7a830deb71696a0a17e4a4e805d44b13c36302',
        tarball: 'https://registry.npmjs.org/@nrsk/sigma/-/sigma-3.6.3.tgz',
        fileCount: 19,
        unpackedSize: 293382,
        signatures: [
          {
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
            sig: 'MEUCIC5GlIb4DOFXICRvinU5wr4LtKYermLu0zdUeXuqmQlMAiEAqfy9Gu+0bvYtwZOwax0Q7pCng4/k2RuB+K//Z/93x+0='
          }
        ]
      },
      _npmUser: { name: 'norskeld', email: 'norskeld@gmail.com' },
      directories: {},
      maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/sigma_3.6.3_1685885672016_0.866550859504484'
      },
      _hasShrinkwrap: false
    }
  },
  time: {
    created: '2021-11-12T03:58:14.158Z',
    '1.0.0': '2021-11-12T03:58:14.324Z',
    modified: '2023-06-04T13:34:32.371Z',
    '1.1.12': '2021-11-13T22:19:01.094Z',
    '1.1.0': '2021-11-15T04:37:24.553Z',
    '1.1.1': '2021-11-15T11:31:16.949Z',
    '1.2.0': '2021-11-17T12:26:19.611Z',
    '1.2.1': '2021-11-18T09:55:37.266Z',
    '1.3.0': '2021-11-28T21:05:45.244Z',
    '1.4.0': '2021-12-02T02:26:58.813Z',
    '1.4.1': '2022-01-02T07:58:05.016Z',
    '1.4.2': '2022-01-12T14:19:18.202Z',
    '2.0.0': '2022-01-23T06:27:05.142Z',
    '2.0.1': '2022-05-13T10:32:50.313Z',
    '2.0.2': '2022-05-14T06:35:36.730Z',
    '2.1.0': '2022-05-14T12:18:31.628Z',
    '2.1.1': '2022-05-14T12:44:07.619Z',
    '2.1.2': '2022-05-31T10:31:47.580Z',
    '2.1.3': '2022-05-31T11:11:38.884Z',
    '2.2.0': '2022-05-31T15:55:11.763Z',
    '2.3.0': '2022-06-01T13:25:08.328Z',
    '2.3.1': '2022-06-01T16:46:36.633Z',
    '2.4.0': '2022-07-02T23:04:57.871Z',
    '2.5.0': '2022-07-04T09:01:04.447Z',
    '2.6.0': '2022-07-04T12:23:50.143Z',
    '2.7.0': '2022-07-04T13:03:54.225Z',
    '2.8.0': '2022-07-12T02:58:27.741Z',
    '2.9.0': '2022-07-12T18:17:50.824Z',
    '2.10.0': '2022-07-29T09:28:21.403Z',
    '3.0.0': '2022-10-02T02:07:32.685Z',
    '3.1.0': '2022-10-08T22:32:34.508Z',
    '3.1.1': '2022-10-25T21:27:37.570Z',
    '3.1.2': '2023-01-05T08:31:12.858Z',
    '3.1.3': '2023-01-05T10:54:48.791Z',
    '3.1.4': '2023-01-14T11:12:54.635Z',
    '3.2.0': '2023-01-15T19:18:46.999Z',
    '3.3.0': '2023-01-15T20:50:15.248Z',
    '3.4.0': '2023-01-16T17:18:18.320Z',
    '3.5.0': '2023-01-16T17:45:28.829Z',
    '3.6.0': '2023-01-17T18:15:03.781Z',
    '3.6.1': '2023-02-21T11:10:40.735Z',
    '3.6.2': '2023-03-14T07:28:52.647Z',
    '3.6.3': '2023-06-04T13:34:32.203Z'
  },
  maintainers: [{ name: 'norskeld', email: 'norskeld@gmail.com' }],
  description: 'TypeScript parser combinator library for building fast and convenient parsers.',
  homepage: 'https://github.com/norskeld/sigma#readme',
  keywords: [
    'typescript',
    'parser-combinators',
    'parser',
    'combinators',
    'parsec',
    'bnf',
    'ebnf',
    'abnf'
  ],
  repository: { type: 'git', url: 'git+https://github.com/norskeld/sigma.git' },
  author: { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
  bugs: { url: 'https://github.com/norskeld/sigma/issues' },
  license: 'MIT',
  readme:
    "# `𝝨` sigma\n\n[![Build/Test](https://img.shields.io/github/actions/workflow/status/norskeld/sigma/test.yml?style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/sigma/actions 'Build and test workflows')\n[![Coverage](https://img.shields.io/coverallsCoverage/github/norskeld/sigma?style=flat-square&colorA=22272d&colorB=22272d)](https://coveralls.io/github/norskeld/sigma 'Test coverage')\n[![NPM](https://img.shields.io/npm/v/@nrsk/sigma?style=flat-square&colorA=22272d&colorB=22272d)](https://npm.im/@nrsk/sigma 'This package on NPM')\n[![Supported Node Versions](https://img.shields.io/static/v1?label=node&message=≥18.16+≤20&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/sigma/blob/master/package.json#L35 'Supported Node versions')\n[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@nrsk/sigma?style=flat-square&colorA=22272d&colorB=22272d&label=minzipped)](https://bundlephobia.com/package/@nrsk/sigma)\n![Tree Shaking](https://img.shields.io/static/v1?label=tree+shaking&message=✔&style=flat-square&colorA=22272d&colorB=22272d)\n[![Semantic Release](https://img.shields.io/static/v1?label=semantic+release&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/semantic-release/semantic-release 'This package uses semantic release to handle releasing, versioning, changelog generation and tagging')\n\nTypeScript [parser combinator][parser-combinator] library for building fast and convenient parsers.\n\n## Features\n\n- [x] Capable of parsing [LL grammars][ll-grammar] using [recursive descent][rd] with backtracking.\n- [x] Ergonomic API with excellent TypeScript support.\n- [x] Zero dependencies. Supports tree shaking.\n- [x] [Performant enough][bench] to beat similar parser combinator libraries.\n\nAll-in-all, Sigma is easy to use and extend, reasonably fast and convenient, *but* a bit limited regarding what types of grammars it can parse.\n\n## Docs\n\nYou can find the documentation [here][docs]. If you want to contribute, feel free to check out [the source code][docs-source].\n\n## Installation\n\n### Node\n\nJust use your favorite package manager.\n\n```bash\nnpm i @nrsk/sigma\n```\n\n### Deno\n\nYou can import the library via [Skypack] (note that `?dts` query parameter, that will pull types as well, **strongly** recommended):\n\n```ts\nimport { ... } from 'https://cdn.skypack.dev/@nrsk/sigma?dts'\nimport { ... } from 'https://cdn.skypack.dev/@nrsk/sigma/parsers?dts'\nimport { ... } from 'https://cdn.skypack.dev/@nrsk/sigma/combinators?dts'\n```\n\n## Example\n\nBelow is an example of parsing nested tuples like `(1, 2, (3, 4))` into an AST.\n\n<details>\n<summary>Click to show the tuples example.</summary>\n\n```ts\nimport { choice, map, optional, sepBy, sequence, takeMid } from '@nrsk/sigma/combinators'\nimport { defer, integer, run, string, whitespace } from '@nrsk/sigma/parsers'\nimport type { Span } from '@nrsk/sigma'\n\n/* AST. */\n\ninterface NumberNode {\n  type: 'number'\n  span: Span\n  value: number\n}\n\ninterface ListNode {\n  type: 'list'\n  span: Span\n  value: Array<NumberNode | ListNode>\n}\n\n/* Mapping functions to turn parsed string values into AST nodes. */\n\nfunction toNumber(value: number, span: Span): NumberNode {\n  return {\n    type: 'number',\n    span,\n    value\n  }\n}\n\nfunction toList(value: Array<NumberNode | ListNode>, span: Span): ListNode {\n  return {\n    type: 'list',\n    span,\n    value\n  }\n}\n\n/* Parsers. */\n\nconst OpenParen = string('(')\nconst CloseParen = string(')')\nconst Space = optional(whitespace())\nconst Comma = sequence(Space, string(','), Space)\n\nconst TupleNumber = defer<NumberNode>()\nconst TupleList = defer<ListNode>()\n\nTupleNumber.with(\n  map(\n    integer(),\n    toNumber\n  )\n)\n\nTupleList.with(\n  map(\n    takeMid(\n      OpenParen,\n      sepBy(choice(TupleList, TupleNumber), Comma),\n      CloseParen\n    ),\n    toList\n  )\n)\n```\n\nThen we simply `run` the root parser, feeding it `with` text:\n\n```ts\nrun(TupleList).with('(1, 2, (3, 4))')\n```\n\nAnd in the end we get the following output with the AST, which can then be manipulated if needed:\n\n```ts\n{\n  isOk: true,\n  span: [ 0, 14 ],\n  pos: 14,\n  value: {\n    type: 'list',\n    span: [ 0, 14 ],\n    value: [\n      { type: 'number', span: [ 1, 2 ], value: 1 },\n      { type: 'number', span: [ 4, 5 ], value: 2 },\n      {\n        type: 'list',\n        span: [ 7, 13 ],\n        value: [\n          { type: 'number', span: [ 8, 9 ], value: 3 },\n          { type: 'number', span: [ 11, 12 ], value: 4 }\n        ]\n      }\n    ]\n  }\n}\n```\n</details>\n\n## License\n\n[MIT](LICENSE).\n\n<!-- Links. -->\n\n[ll-grammar]: https://en.wikipedia.org/wiki/LL_grammar\n[rd]: https://en.wikipedia.org/wiki/Recursive_descent_parser\n[parser-combinator]: https://en.wikipedia.org/wiki/Parser_combinator\n[cfg]: https://en.wikipedia.org/wiki/Context-free_grammar\n[docs]: https://sigma.vm.codes\n[docs-source]: ./docs\n[bench]: ./benchmarks\n[skypack]: https://skypack.dev\n",
  readmeFilename: 'README.md',
  contributors: [
    { name: 'Vladislav Mamon', email: 'hello@vm.codes' },
    { name: 'Danil Tarasov', email: 'thefedaikin@gmail.com' }
  ]
}

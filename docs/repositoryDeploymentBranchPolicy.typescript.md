# `github_repository_deployment_branch_policy`

Refer to the Terraform Registory for docs: [`github_repository_deployment_branch_policy`](https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy).

# `repositoryDeploymentBranchPolicy` Submodule <a name="`repositoryDeploymentBranchPolicy` Submodule" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDeploymentBranchPolicy <a name="RepositoryDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer"></a>

```typescript
import { repositoryDeploymentBranchPolicy } from '@cdktf/provider-github'

new repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy(scope: Construct, id: string, config: RepositoryDeploymentBranchPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig">RepositoryDeploymentBranchPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig">RepositoryDeploymentBranchPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct"></a>

```typescript
import { repositoryDeploymentBranchPolicy } from '@cdktf/provider-github'

repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement"></a>

```typescript
import { repositoryDeploymentBranchPolicy } from '@cdktf/provider-github'

repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource"></a>

```typescript
import { repositoryDeploymentBranchPolicy } from '@cdktf/provider-github'

repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentNameInput">environmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentNameInput"></a>

```typescript
public readonly environmentNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDeploymentBranchPolicyConfig <a name="RepositoryDeploymentBranchPolicyConfig" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.Initializer"></a>

```typescript
import { repositoryDeploymentBranchPolicy } from '@cdktf/provider-github'

const repositoryDeploymentBranchPolicyConfig: repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.environmentName">environmentName</a></code> | <code>string</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the branch. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.repository">repository</a></code> | <code>string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy#environment_name RepositoryDeploymentBranchPolicy#environment_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy#name RepositoryDeploymentBranchPolicy#name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy#repository RepositoryDeploymentBranchPolicy#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


